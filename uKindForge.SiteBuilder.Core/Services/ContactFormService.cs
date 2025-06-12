using uKindForge.SiteBuilder.Core.ViewModels;
using Umbraco.Cms.Core.Web;

namespace uKindForge.SiteBuilder.Core.Services
{
    public class ContactFormService : IContactFormService
    {
        private readonly IEmailService _emailCore;
        private readonly IPageService _pageService;

        public ContactFormService(
            IEmailService emailCore,
            IPageService pageService)
        {
            _emailCore = emailCore;
            _pageService = pageService;
        }

        public async Task SendToAdminAsync(ContactFormViewModel model)
        {
            var home = _pageService.GetCurrentRootHomePage();
            if (home == null 
                || home.EmailTemplateEmailToAdmin?.Content?.EnableSendEmail == false
                || string.IsNullOrWhiteSpace(home.EmailTemplateEmailToAdmin.Content.SendTo)
                ) return;

            var adminEmail = home.EmailTemplateEmailToAdmin.Content;
            var template = adminEmail.EmailBody;

            var subject = ReplacePlaceholders(adminEmail.EmailSubject, model);
            var body = ReplacePlaceholders(template.ToHtmlString(), model);

            await _emailCore.SendEmailAsync(adminEmail.SendTo, subject, body, adminEmail.CcTo, adminEmail.BccTo);
        }

        public async Task SendToClientAsync(ContactFormViewModel model)
        {
            var home = _pageService.GetCurrentRootHomePage();
            if (home == null || home.EmailTemplateEmailToClient?.Content?.EnableSendEmail == false) return;

            var clientEmail = home.EmailTemplateEmailToClient.Content;
            var template = clientEmail.EmailBody;

            var subject = ReplacePlaceholders(clientEmail.EmailSubject, model);
            var body = ReplacePlaceholders(template.ToHtmlString(), model);

            await _emailCore.SendEmailAsync(model.Email, subject, body, clientEmail.CcTo, clientEmail.BccTo);
        }

        private string ReplacePlaceholders(string template, ContactFormViewModel model)
        {
            return template
                .Replace("{{name}}", model.Name)
                .Replace("{{email}}", model.Email)
                .Replace("{{phone}}", model.Phone ?? "")
                .Replace("{{ip}}", model.IPAddress ?? "")
                .Replace("{{submittedAt}}", model.SubmittedAt.ToLongTimeString())
                .Replace("{{message}}", model.Message ?? "");
        }
    }

}

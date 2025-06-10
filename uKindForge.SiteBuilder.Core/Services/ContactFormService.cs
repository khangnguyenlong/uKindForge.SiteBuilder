using uKindForge.SiteBuilder.Core.ViewModels;
using uKindForge.SiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.Services
{
    public class ContactFormService : IContactFormService
    {
        private readonly IEmailService _emailCore;
        private readonly IUmbracoContextFactory _contextFactory;

        public ContactFormService(
            IEmailService emailCore,
            IUmbracoContextFactory contextFactory)
        {
            _emailCore = emailCore;
            _contextFactory = contextFactory;
        }

        private GlobalSettings GetGlobal()
        {
            using var cref = _contextFactory.EnsureUmbracoContext();
            return cref.UmbracoContext.Content
                .GetAtRoot()
                    .FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(GlobalSettings.ModelTypeAlias)) as GlobalSettings;
        }

        public async Task SendToAdminAsync(ContactFormViewModel model)
        {
            var global = GetGlobal();
            if (global == null 
                || global.EmailTemplateEmailToAdmin?.Content?.EnableSendEmail == false
                || string.IsNullOrWhiteSpace(global.EmailTemplateEmailToAdmin.Content.SendTo)
                ) return;

            var adminEmail = global.EmailTemplateEmailToAdmin.Content;
            var template = adminEmail.EmailBody;

            var subject = ReplacePlaceholders(adminEmail.EmailSubject, model);
            var body = ReplacePlaceholders(template.ToHtmlString(), model);

            await _emailCore.SendEmailAsync(adminEmail.SendTo, subject, body, adminEmail.CcTo, adminEmail.BccTo);
        }

        public async Task SendToClientAsync(ContactFormViewModel model)
        {
            var global = GetGlobal();
            if (global == null || global.EmailTemplateEmailToClient?.Content?.EnableSendEmail == false) return;

            var clientEmail = global.EmailTemplateEmailToClient.Content;
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

using System.Net.Mail;
using System.Net;

namespace uKindForge.SiteBuilder.Core.Services
{
    public class EmailService : IEmailService
    {
        private readonly IPageService _pageService;

        public EmailService(IPageService pageService)
        {
            _pageService = pageService;
        }

        public async Task SendEmailAsync(string to, string subject, string body, string cc = "", string bcc = "")
        {
            var home = _pageService.GetCurrentRootHomePage();
            if (home == null) return;

            var smtpFrom = home.FromEmail;
            var smtpHost = home.SmtpHost;
            var smtpPort = home.SmtpPort;
            var smtpUser = home.SmtpUsername;
            var smtpPass = home.SmtpPassword;
            var smtpUseSsl = home.SmtpUseSsl;

            using var message = new MailMessage
            {
                From = new MailAddress(smtpFrom),
                Subject = subject,
                Body = body,
                IsBodyHtml = true
            };

            message.To.Add(to);
            if (!string.IsNullOrWhiteSpace(cc)) message.CC.Add(cc);
            if (!string.IsNullOrWhiteSpace(bcc)) message.Bcc.Add(bcc);

            var client = new SmtpClient(smtpHost, smtpPort)
            {
                Credentials = new NetworkCredential(smtpUser, smtpPass),
                EnableSsl = smtpUseSsl
            };

            await client.SendMailAsync(message);
        }
    }


}

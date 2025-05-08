using System.Net.Mail;
using System.Net;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;
using GoCoSiteBuilder.Models;

namespace GoCoSiteBuilder.Core.Services
{
    public class EmailService : IEmailService
    {
        private readonly IUmbracoContextFactory _contextFactory;

        public EmailService(IUmbracoContextFactory contextFactory)
        {
            _contextFactory = contextFactory;
        }

        public async Task SendEmailAsync(string to, string subject, string body, string cc = "", string bcc = "")
        {
            using var cref = _contextFactory.EnsureUmbracoContext();
            var global = cref.UmbracoContext.Content
                .GetAtRoot()
                    .FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(GlobalSettings.ModelTypeAlias)) as GlobalSettings;

            if (global == null) return;

            var smtpFrom = global.FromEmail;
            var smtpHost = global.SmtpHost;
            var smtpPort = global.SmtpPort;
            var smtpUser = global.SmtpUsername;
            var smtpPass = global.SmtpPassword;
            var smtpUseSsl = global.SmtpUseSsl;

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

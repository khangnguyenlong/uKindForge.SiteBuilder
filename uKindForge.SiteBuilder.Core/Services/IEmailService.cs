using uKindForge.SiteBuilder.Core.ViewModels;

namespace uKindForge.SiteBuilder.Core.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string to, string subject, string body, string cc = "", string bcc = "");
    }
}

using GoCoSiteBuilder.Core.ViewModels;

namespace GoCoSiteBuilder.Core.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string to, string subject, string body, string cc = "", string bcc = "");
    }
}

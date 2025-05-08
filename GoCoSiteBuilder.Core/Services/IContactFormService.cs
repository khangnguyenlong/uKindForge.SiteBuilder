using GoCoSiteBuilder.Core.ViewModels;

namespace GoCoSiteBuilder.Core.Services
{
    public interface IContactFormService
    {
        Task SendToAdminAsync(ContactFormViewModel model);
        Task SendToClientAsync(ContactFormViewModel model);
    }
}

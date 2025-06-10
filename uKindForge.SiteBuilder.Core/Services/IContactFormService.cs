using uKindForge.SiteBuilder.Core.ViewModels;

namespace uKindForge.SiteBuilder.Core.Services
{
    public interface IContactFormService
    {
        Task SendToAdminAsync(ContactFormViewModel model);
        Task SendToClientAsync(ContactFormViewModel model);
    }
}

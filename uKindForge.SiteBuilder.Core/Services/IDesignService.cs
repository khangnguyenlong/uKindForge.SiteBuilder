using uKindForge.SiteBuilder.Core.ViewModels;
using uKindForge.SiteBuilder.Models;

namespace uKindForge.SiteBuilder.Core.Services
{
    public interface IDesignService
    {
        Task<DesignViewModel> GenerateCssStyle(int designDetailId);
        Task<DesignViewModel> GenerateCssStyle(DesignDetail designDetail);
    }
}

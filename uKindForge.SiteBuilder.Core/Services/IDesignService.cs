using uKindForge.SiteBuilder.Core.ViewModels;
using uKindForge.SiteBuilder.Models;

namespace uKindForge.SiteBuilder.Core.Services
{
    public interface IDesignService
    {
        Task<DesignViewModel> GenerateCssStyle(string designDetailId);
        Task<DesignViewModel> GenerateCssStyle(DesignDetail designDetail);
    }
}

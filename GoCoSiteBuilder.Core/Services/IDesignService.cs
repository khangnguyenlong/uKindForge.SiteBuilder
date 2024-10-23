using GoCoSiteBuilder.Core.ViewModels;
using GoCoSiteBuilder.Models;

namespace GoCoSiteBuilder.Core.Services
{
    public interface IDesignService
    {
        Task<DesignViewModel> GenerateCssStyle(string designDetailId);
        Task<DesignViewModel> GenerateCssStyle(DesignDetail designDetail);
    }
}

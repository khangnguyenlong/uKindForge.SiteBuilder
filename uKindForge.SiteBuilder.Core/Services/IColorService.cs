using uKindForge.SiteBuilder.Core.Models;

namespace uKindForge.SiteBuilder.Core.Services
{
    public interface IColorService
    {
        Task<ColorResponseModel> GenerateColorsAsync(ColorRequestModel request);
    }
}

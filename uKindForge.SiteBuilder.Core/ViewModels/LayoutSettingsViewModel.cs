using Umbraco.Cms.Core.Models;
namespace uKindForge.SiteBuilder.Core.ViewModels
{
    public class LayoutSettingsViewModel
    { 
        public string BackgroundType { get; set; } = "color";
        public string SectionColorStyle { get; set; }
        public MediaWithCrops BackgroundImage { get; set; }
        public string BackgroundImageUrl { get; set; }
        public MediaWithCrops BackgroundVideo { get; set; }
        public string BackgroundVideoUrl { get; set; }
        public bool FullScreen { get; set; }
        public int Top { get; set; } = 6;
        public int Bottom { get; set; } = 6;
        public bool FullWidth { get; set; }

        public bool EnableOverlay { get; set; }
        public string OverlayColor { get; set; }
        public decimal OverlayOpacity { get; set; } = 0m;
    }
}

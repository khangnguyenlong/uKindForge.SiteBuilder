using Umbraco.Cms.Core.Models;
namespace GoCoSiteBuilder.Core.ViewModels
{
    public class LayoutSettingsViewModel
    { 
        public string OrderColor { get; set; }
        public MediaWithCrops BackgroundImage { get; set; }
        public string BackgroundType { get; set; }
        public string BackgroundVideoUrl { get; set; }
        public bool IsAddMarginBottom { get; set; }
        public bool IsAddMarginTop { get; set; }
        public int MarginBottom { get; set; }
        public int MarginTop { get; set; }
        public bool IsAddPaddingBottom { get; set; }
        public bool IsAddPaddingTop { get; set; }
        public int PaddingBottom { get; set; }
        public int PaddingTop { get; set; }
        public bool FullWidth { get; set; }
    }
}

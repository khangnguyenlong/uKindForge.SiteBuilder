using Umbraco.Cms.Core.Models;

namespace uKindForge.SiteBuilder.Core.ViewModels
{
    public class ImageViewModel
    {
        public MediaWithCrops Image { get; set; }
        public string ImageAlt { get; set; }
        public string Title { get; set; }
        public int? CropWidth { get; set; }
        public int? CropHeight { get; set; }
        public string CssStyle { get; set; }

        public Link Link { get; set; }

        public ImageViewModel() { }

        public ImageViewModel(MediaWithCrops image)
        {
            Image = image;
        }
    }
}

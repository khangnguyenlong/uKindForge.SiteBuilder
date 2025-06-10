using uKindForge.SiteBuilder.Models;

namespace uKindForge.SiteBuilder.Core.ViewModels
{
    public class LineIconLinkViewModel
    {
        public IconLink IconLink { get; set; }

        public LineIconLinkViewModel(IconLink iconLink) 
        {
            IconLink = iconLink;
        }
    }
}

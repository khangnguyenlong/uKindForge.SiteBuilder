using GoCoSiteBuilder.Models;

namespace GoCoSiteBuilder.Core.ViewModels
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

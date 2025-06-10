using uKindForge.SiteBuilder.Models;

namespace uKindForge.SiteBuilder.Core.ViewModels
{
    public class HeadingViewModel
    {
        public Heading Heading { get; set; }
        public string CssClass { get; set; }

        public HeadingViewModel(Heading heading, string cssClass = "") 
        {
            Heading = heading;
            CssClass = cssClass;
        }
    }
}

using GoCoSiteBuilder.Models;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class LineIconViewModel
    {
        public LineIcon LineIcon { get; set; }
        public string DefaultIcon { get; set; }
        public string CssClass { get; set; }

        public LineIconViewModel(LineIcon lineIcon, string defaultIcon = "", string cssClass = "")
        {
            LineIcon = lineIcon;
            DefaultIcon = defaultIcon;
            CssClass = cssClass;
        }
    }
}

using Umbraco.Cms.Core.Models;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class LinkViewModel
    {
        public Link Link { get; set; }

        public LinkViewModel() { }

        public LinkViewModel(Link link)
        {
            Link = link;
        }
    }
}

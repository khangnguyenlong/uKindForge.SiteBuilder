using Umbraco.Cms.Core.Models;

namespace uKindForge.SiteBuilder.Core.ViewModels
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

using uKindForge.SiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.Services
{
    public class PageService(IUmbracoContextFactory contextFactory) : IPageService
    {
        private readonly IUmbracoContextFactory _contextFactory = contextFactory;

        public HomePage GetCurrentRootHomePage()
        {
            using var cref = _contextFactory.EnsureUmbracoContext();
            var home = cref.UmbracoContext.PublishedRequest.PublishedContent.AncestorOrSelf<HomePage>();

            return home;
        }
    }
}

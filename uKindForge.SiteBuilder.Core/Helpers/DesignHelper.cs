using uKindForge.SiteBuilder.Core.Constants;
using uKindForge.SiteBuilder.Core.Services;
using uKindForge.SiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.Helpers
{
	public class DesignHelper(IUmbracoContextFactory umbracoContextFactory,
        IPageService pageService)
	{
        public string GetBackgroundClass(string bgContentOrder)
        {
            var designDetail = GetDesign();
            return CssClassHelper.GetBackgroundClass(bgContentOrder, designDetail);
        }

        public string GetButtonClass(string btnDesignOrder)
        {
            var designDetail = GetDesign();
            return CssClassHelper.GetButtonClass(btnDesignOrder, designDetail);
        }

        public DesignDetail GetDesign()
		{
            //TODO cache this
            var home = pageService.GetCurrentRootHomePage();
            if(home?.OverrideDesign == null || home?.OverrideDesign is not DesignDetail design)
            {
                using var contextReference = umbracoContextFactory.EnsureUmbracoContext();
                var umbracoContext = contextReference.UmbracoContext;
                return GetDefaultDesign(umbracoContext);
            }

            return design;
		}

        private DesignDetail GetDefaultDesign(IUmbracoContext context)
        {
            var currentPage = context?.PublishedRequest?.PublishedContent;
            if (currentPage == null) return null;

            var designList = context.Content?.GetAtRoot()
                .FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(DesignList.ModelTypeAlias)) as DesignList;

            if(designList == null) return null;

            var design = designList.ChooseDesign as DesignDetail;
            if(design == null)
            {
                design = designList.FirstChild<DesignDetail>();
            }

            return design;
        }
    }
}

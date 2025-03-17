using GoCoSiteBuilder.Core.Constants;
using GoCoSiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;

namespace GoCoSiteBuilder.Core.Helpers
{
	public class DesignHelper(IUmbracoContextFactory umbracoContextFactory)
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
            using var contextReference = umbracoContextFactory.EnsureUmbracoContext();

			var umbracoContext = contextReference.UmbracoContext;

            var design = GetOverrideDesign(umbracoContext);
            if(design == null)
            {
                design = GetDefaultDesign(umbracoContext);
            }

            return design;
		}

        private DesignDetail GetOverrideDesign(IUmbracoContext context)
        {
            var currentPage = context?.PublishedRequest?.PublishedContent;
            if (currentPage == null) return null;
            var overrideDesignPropValue = currentPage.Value(AppConstants.PageProperty.OverrideDesign) as DesignDetail;

            return overrideDesignPropValue;
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

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
			using var contextReference = umbracoContextFactory.EnsureUmbracoContext();

			var umbracoContext = contextReference.UmbracoContext;
			var designList = umbracoContext.Content?.GetAtRoot()
				.FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(DesignList.ModelTypeAlias)) as DesignList;
			return designList?.FirstChild<DesignDetail>();
		}
	}
}

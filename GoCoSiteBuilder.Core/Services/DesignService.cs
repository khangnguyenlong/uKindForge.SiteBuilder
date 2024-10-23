using GoCoSiteBuilder.Core.Builder;
using GoCoSiteBuilder.Core.ViewModels;
using GoCoSiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;


namespace GoCoSiteBuilder.Core.Services
{
    public class DesignService : IDesignService
    {
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;

        public DesignService(IUmbracoContextAccessor umbracoContextAccessor) 
        {
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        public async Task<DesignViewModel> GenerateCssStyle(DesignDetail designDetail)
        {
            if (designDetail == null) return null;

            var cssStyle = new CssStyleBuilder()
                .MakeButtonStyle(designDetail.ButtonColors)
                .MakeContentStyle(designDetail.ContentColors)
                .Build();

            var mainNav = designDetail.MainNavigationColor.Content;
            var secondNav = designDetail.SecondNavigationColor.Content;
            var dropdownNav = designDetail.DropdownNavigationColor.Content;
            var footer = designDetail.Footer.Content;

            var style = @$"
                <style>
                    :root, :host, body {{
                        /* === Typography === */
                        --heading-font-family: 'Inter', sans-serif;
                        --heading-font-weight: 600;
                        --heading-line-height: 1.25;

                        --heading-font-size-h1-desktop: 44px;
                        --heading-font-size-h1-tablet: 40px;
                        --heading-font-size-h1-mobile: 40px;

                        --heading-font-size-h2-desktop: 36px;
                        --heading-font-size-h2-tablet: 32px;
                        --heading-font-size-h2-mobile: 32px;

                        --heading-font-size-h3-desktop: 28px;
                        --heading-font-size-h3-tablet: 28px;
                        --heading-font-size-h3-mobile: 28px;

                        --heading-font-size-h4-desktop: 24px;
                        --heading-font-size-h4-tablet: 24px;
                        --heading-font-size-h4-mobile: 24px;

                        --heading-font-size-h5-desktop: 20px;
                        --heading-font-size-h5-tablet: 20px;
                        --heading-font-size-h5-mobile: 20px;

                        --heading-font-size-h6-desktop: 16px;
                        --heading-font-size-h6-tablet: 16px;
                        --heading-font-size-h6-mobile: 16px;

                        /* Text */
                        --text-font-family: 'Inter', sans-serif;
                        --text-font-weight: 400;
                        --text-line-height: 1.6;

                        /* Text font sizes */
                        --text-font-size-desktop: 16px;
                        --text-font-size-tablet: 16px;
                        --text-font-size-mobile: 16px;

                        /* Button font sizes */
                        --button-font-size-desktop: --text-font-size-desktop;
                        --button-font-size-tablet: --text-font-size-tablet;
                        --button-font-size-mobile: --text-font-size-mobile;

                        /* card */
                        --card-box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);
                        --card-box-shadow-hover: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);

                        /* === Header === */
                        /* Header - Main Navigation */
                        --header-nav-bg-color: {mainNav.BgColor};
                        --header-nav-link-color: {mainNav.LinkColor};
                        --header-nav-link-hover-color: {mainNav.LinkHoverColor};
                        --header-nav-link-border-color: {mainNav.LinkBorderColor};
                        --header-nav-link-hover-border-color: {mainNav.LinkHoverBorderColor};
                        --header-nav-link-background-color: {mainNav.LinkBackgroundColor};
                        --header-nav-link-hover-background-color: {mainNav.LinkHoverBgColor};

                        /* Header - Secondary Navigation */
                        --header-secondary-nav-link-color: {secondNav.LinkColor};
                        --header-secondary-nav-link-hover-color: {secondNav.LinkHoverColor};

                        /* Header - Dropdown Navigation */
                        --header-dropdown-bg-color: {dropdownNav.Background};
                        --header-dropdown-link-color: {dropdownNav.Link};
                        --header-dropdown-link-hover-color: {dropdownNav.LinkHover};
                        --header-dropdown-link-hover-bg-color: {dropdownNav.LinkHoverBackground};

                        /* Footer */
                        --footer-bg-color: {footer.BgColor};
                        --footer-heading-color: {footer.HeadingColor};
                        --footer-text-color: {footer.TextColor};
                        --footer-link-color: {footer.LinkColor};
                        --footer-link-hover-color: {footer.LinkHoverColor};

                        --section-padding: 60px;
                    }}
                    {cssStyle}
                </style>
            ";

            return new DesignViewModel() 
            {
                CssStyle = style,
            };
        }

        public async Task<DesignViewModel> GenerateCssStyle(string contentId) //TODO choose from current node
        {
            var designDetail = GetChooseDesignFromDesignList();
            return await GenerateCssStyle(designDetail);
        }

        private DesignDetail GetChooseDesignFromDesignList()
        {
            if (!_umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext))
                return null;

            var designList = umbracoContext.Content?.GetAtRoot()
                        .FirstOrDefault(x => x.ContentType.Alias.InvariantEquals("designList")) as DesignList;
            return designList?.FirstChild<DesignDetail>();
        }
    }
}

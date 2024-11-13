using GoCoSiteBuilder.Core.Builder;
using GoCoSiteBuilder.Core.ViewModels;
using GoCoSiteBuilder.Models;
using Umbraco.Cms.Core.Web;
using Umbraco.Extensions;


namespace GoCoSiteBuilder.Core.Services
{
    public class DesignService(IUmbracoContextAccessor umbracoContextAccessor) : IDesignService
    {
        public async Task<DesignViewModel> GenerateCssStyle(DesignDetail designDetail)
        {
            if (designDetail == null) return null;

            var font = designDetail.FontSettings;
            var color = designDetail.ColorSettings;

            var cssStyle = new CssStyleBuilder()
                .MakeButtonStyle(color.Buttons)
                .MakeContentStyle(color.Contents)
                .Build();

            var style = @$"
                <style>
                    :root, :host, body {{
                        /* === Typography === */
                        --h1-font-family: '{font.H1.Font.FontFamily}', {font.H1.Font.FontCategory};
                        --h1-font-weight: {font.H1.Font.FontWeight};
                        --h1-font-line-height: 1.6;
                        --h1-font-size-desktop: {font.H1.FontSizeDesktop}px;
                        --h1-font-size-tablet: {font.H1.FontSizeTablet}px;
                        --h1-font-size-mobile: {font.H1.FontSizeMobile}px;

                        --h2-font-family: '{font.H2.Font.FontFamily}', {font.H2.Font.FontCategory};
                        --h2-font-weight: {font.H2.Font.FontWeight};
                        --h2-font-line-height: 1.6;
                        --h2-font-size-desktop: {font.H2.FontSizeDesktop}px;
                        --h2-font-size-tablet: {font.H2.FontSizeTablet}px;
                        --h2-font-size-mobile: {font.H2.FontSizeMobile}px;

                        --h3-font-family: '{font.H3.Font.FontFamily}', {font.H3.Font.FontCategory};
                        --h3-font-weight: {font.H3.Font.FontWeight};
                        --h3-font-line-height: 1.6;
                        --h3-font-size-desktop: {font.H3.FontSizeDesktop}px;
                        --h3-font-size-tablet: {font.H3.FontSizeTablet}px;
                        --h3-font-size-mobile: {font.H3.FontSizeMobile}px;

                        --h4-font-family: '{font.H4.Font.FontFamily}', {font.H4.Font.FontCategory};
                        --h4-font-weight: {font.H4.Font.FontWeight};
                        --h4-font-line-height: 1.6;
                        --h4-font-size-desktop: {font.H4.FontSizeDesktop}px;
                        --h4-font-size-tablet: {font.H4.FontSizeTablet}px;
                        --h4-font-size-mobile: {font.H4.FontSizeMobile}px;

                        --h5-font-family: '{font.H5.Font.FontFamily}', {font.H5.Font.FontCategory};
                        --h5-font-weight: {font.H5.Font.FontWeight};
                        --h5-font-line-height: 1.6;
                        --h5-font-size-desktop: {font.H5.FontSizeDesktop}px;
                        --h5-font-size-tablet: {font.H5.FontSizeTablet}px;
                        --h5-font-size-mobile: {font.H5.FontSizeMobile}px;

                        --h6-font-family: '{font.H6.Font.FontFamily}', {font.H6.Font.FontCategory};
                        --h6-font-weight: {font.H6.Font.FontWeight};
                        --h6-font-line-height: 1.6;
                        --h6-font-size-desktop: {font.H6.FontSizeDesktop}px;
                        --h6-font-size-tablet: {font.H6.FontSizeTablet}px;
                        --h6-font-size-mobile: {font.H6.FontSizeMobile}px;

                        /* Text */
                        --text-font-family: '{font.Text.Font.FontFamily}', {font.Text.Font.FontCategory};
                        --text-font-weight: {font.Text.Font.FontWeight};
                        --text-line-height: 1.6;
                        --text-font-size-desktop: {font.Text.FontSizeDesktop}px;
                        --text-font-size-tablet: {font.Text.FontSizeTablet}px;
                        --text-font-size-mobile: {font.Text.FontSizeMobile}px;

                        /* Button font sizes */
                        --button-font-size-desktop: --text-font-size-desktop;
                        --button-font-size-tablet: --text-font-size-tablet;
                        --button-font-size-mobile: --text-font-size-mobile;

                        /* card */
                        --card-box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16);
                        --card-box-shadow-hover: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16);

                        /* === Header === */
                        /* Header - Main Navigation */
                        --header-nav-bg-color: #{color.MainNav.Background};
                        --header-nav-link-color: #{color.MainNav.Link};
                        --header-nav-link-hover-color: #{color.MainNav.LinkHover};
                        --header-nav-link-border-color: #{color.MainNav.LinkBorder};
                        --header-nav-link-hover-border-color: #{color.MainNav.LinkBorderHover};
                        --header-nav-link-background-color: #{color.MainNav.LinkBackground};
                        --header-nav-link-hover-background-color: #{color.MainNav.LinkHoverBackground};

                        /* Header - Secondary Navigation */
                        --header-secondary-nav-link-color: #{color.SecondNav.Link};
                        --header-secondary-nav-link-hover-color: #{color.SecondNav.LinkHover};
                        --header-secondary-nav-background-color: #{color.SecondNav.Background};

                        /* Header - Dropdown Navigation */
                        --header-dropdown-bg-color: #{color.DropdownNav.Background};
                        --header-dropdown-link-color: #{color.DropdownNav.Link};
                        --header-dropdown-link-bg-color: #{color.DropdownNav.LinkBackground};
                        --header-dropdown-link-hover-color: #{color.DropdownNav.LinkHover};
                        --header-dropdown-link-hover-bg-color: #{color.DropdownNav.LinkHoverBackground};

						--mobile-header-nav-bg-color: var(--header-nav-bg-color);

                        /* Footer */
                        --footer-bg-color: #{color.Footer.Background};
                        --footer-heading-color: #{color.Footer.Heading};
                        --footer-text-color: #{color.Footer.Text};
                        --footer-link-color: #{color.Footer.Link};
                        --footer-link-hover-color: #{color.Footer.LinkHover};

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
            if (!umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext))
                return null;

            var designList = umbracoContext.Content?.GetAtRoot()
                        .FirstOrDefault(x => x.ContentType.Alias.InvariantEquals(nameof(DesignList.ModelTypeAlias))) as DesignList;
            return designList?.FirstChild<DesignDetail>();
        }
    }
}

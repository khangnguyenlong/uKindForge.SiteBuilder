using uKindForge.SiteBuilder.Models;
using System.Text;

namespace uKindForge.SiteBuilder.Core.Builder
{
    public class DesignBuilder
    {
        private readonly StringBuilder _cssStyles = new();

        public DesignBuilder() { }

        public DesignBuilder BuildTypograpgy(FontSettings font)
        {
            var fontCss = $@"
                /* =============== TYPOGRAPHY =============== */  
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
            ";
            _cssStyles.AppendLine(fontCss);
            return this;
        }

        public DesignBuilder BuildColorPalette(ColorPalette colorPalette)
        {
            if (colorPalette == null) return this;

            var colorPaletteCss = @$"
                /* ===== PRIMARY ===== */
                --color-primary-main: {colorPalette.Primary.Main};
                --color-primary-shade: {colorPalette.Primary.Shade};
                --color-primary-tint: {colorPalette.Primary.Tint};
                --color-primary-on-main-text: {colorPalette.Primary.OnMainText};

                /* ===== ACCENT ===== */
                --color-accent-main: {colorPalette.Accent.Main};
                --color-accent-shade: {colorPalette.Accent.Shade};
                --color-accent-tint: {colorPalette.Accent.Tint};
                --color-accent-on-main-text: {colorPalette.Accent.OnMainText};

                /* ===== NEUTRAL LIGHT ===== */
                --color-neutral-light-bg: {colorPalette.NeutralLight.Background};
                --color-neutral-light-surface: {colorPalette.NeutralLight.Surface};
                --color-neutral-light-text-main: {colorPalette.NeutralLight.TextMain};
                --color-neutral-light-text-muted: {colorPalette.NeutralLight.TextMuted};
                --color-neutral-light-border: {colorPalette.NeutralLight.Border};

                /* ===== NEUTRAL DARK ===== */
                --color-neutral-dark-bg: {colorPalette.NeutralDark.Background};
                --color-neutral-dark-surface: {colorPalette.NeutralDark.Surface};
                --color-neutral-dark-text-main: {colorPalette.NeutralDark.TextMain};
                --color-neutral-dark-text-muted: {colorPalette.NeutralDark.TextMuted};
                --color-neutral-dark-border: {colorPalette.NeutralDark.Border};

                /* ===== ADDITIONAL COLORS ===== */
                --color-additional-1-main: {colorPalette.AdditionalColor1.Main};
                --color-additional-2-main: {colorPalette.AdditionalColor2.Main};
                --color-additional-3-main: {colorPalette.AdditionalColor3.Main};
                --color-additional-4-main: {colorPalette.AdditionalColor4.Main};
                --color-additional-5-main: {colorPalette.AdditionalColor5.Main};                
            ";

            _cssStyles.AppendLine(colorPaletteCss);

            return this;
        }

        public DesignBuilder BuildHeader(ColorToken colorTokens)
        {
            if (colorTokens == null) return this;

            var headerColorCss = @$"
                /* ===== HEADER FRAME ===== */
            --header-frame-background: var({colorTokens.Header.Frame.HeaderBackground});
            --header-frame-border: var({colorTokens.Header.Frame.HeaderBorder});
            --header-brand-text: var({colorTokens.Header.Frame.BrandText});

            /* ===== HEADER NAVBAR ===== */
            --header-nav-menu-group-background: var({colorTokens.Header.NavBar.MenuGroupBackground});
            --header-nav-menu-group-border: var({colorTokens.Header.NavBar.MenuGroupBorder});
            --header-nav-item-text: var({colorTokens.Header.NavBar.MenuItemText});
            --header-nav-item-text-hover: var({colorTokens.Header.NavBar.MenuItemTextHover});
            --header-nav-item-border: var({colorTokens.Header.NavBar.MenuItemBorder});
            --header-nav-item-border-hover: var({colorTokens.Header.NavBar.MenuItemBorderHover});
            --header-nav-item-background: var({colorTokens.Header.NavBar.MenuItemBackground});
            --header-nav-item-background-hover: var({colorTokens.Header.NavBar.MenuItemBackgroundHover});
            --header-nav-item-underline-hover: var({colorTokens.Header.NavBar.MenuItemUnderlineHover});
            --header-nav-item-separator: var({colorTokens.Header.NavBar.MenuItemSeparator});

            /* ===== HEADER PRIMARY BUTTON ===== */
            --header-primary-button-bg: var({colorTokens.Header.PrimaryButton.Background});
            --header-primary-button-bg-hover: var({colorTokens.Header.PrimaryButton.BackgroundHover});
            --header-primary-button-text: var({colorTokens.Header.PrimaryButton.Text});
            --header-primary-button-text-hover: var({colorTokens.Header.PrimaryButton.TextHover});
            --header-primary-button-border: var({colorTokens.Header.PrimaryButton.Border});
            --header-primary-button-border-hover: var({colorTokens.Header.PrimaryButton.BorderHover});

            /* ===== HEADER SECONDARY BUTTON ===== */
            --header-secondary-button-bg: var({colorTokens.Header.SecondaryButton.Background});
            --header-secondary-button-bg-hover: var({colorTokens.Header.SecondaryButton.BackgroundHover});
            --header-secondary-button-text: var({colorTokens.Header.SecondaryButton.Text});
            --header-secondary-button-text-hover: var({colorTokens.Header.SecondaryButton.TextHover});
            --header-secondary-button-border: var({colorTokens.Header.SecondaryButton.Border});
            --header-secondary-button-border-hover: var({colorTokens.Header.SecondaryButton.BorderHover});

            /* ===== HEADER DROPDOWN ===== */
            --header-dropdown-bg: var({colorTokens.Header.DropdownMenu.Background});
            --header-dropdown-item-text: var({colorTokens.Header.DropdownMenu.ItemText});
            --header-dropdown-item-text-hover: var({colorTokens.Header.DropdownMenu.ItemTextHover});
            --header-dropdown-item-bg-hover: var({colorTokens.Header.DropdownMenu.ItemBackgroundHover});
            --header-dropdown-border: var({colorTokens.Header.DropdownMenu.Border});
            --header-dropdown-section-title: var({colorTokens.Header.DropdownMenu.SectionTitle});

            /* ===== HAMBURGER ===== */
            --header-hamburger-text: var({colorTokens.Header.Hamberger.Text});

                ";

            _cssStyles.AppendLine(headerColorCss);

            return this;
        }

        public DesignBuilder BuildFooter(ColorToken colorToken)
        {
            if (colorToken == null) return this;
            var footerColorCss = $@"
                /* ===== FOOTER BASE ===== */
                --footer-background: var({colorToken.Footer.Base.Background});
                --footer-heading: var({colorToken.Footer.Base.Heading});
                --footer-highlight-text: var({colorToken.Footer.Base.HighlightText});
                --footer-text: var({colorToken.Footer.Base.Text});
                --footer-line: var({colorToken.Footer.Base.Line});

                /* ===== FOOTER PRIMARY BUTTON ===== */
                --footer-primary-button-bg: var({colorToken.Footer.PrimaryButton.Background});
                --footer-primary-button-bg-hover: var({colorToken.Footer.PrimaryButton.BackgroundHover});
                --footer-primary-button-text: var({colorToken.Footer.PrimaryButton.Text});
                --footer-primary-button-text-hover: var({colorToken.Footer.PrimaryButton.TextHover});
                --footer-primary-button-border: var({colorToken.Footer.PrimaryButton.Border});
                --footer-primary-button-border-hover: var({colorToken.Footer.PrimaryButton.BorderHover});

                /* ===== FOOTER SECONDARY BUTTON ===== */
                --footer-secondary-button-bg: var({colorToken.Footer.SecondaryButton.Background});
                --footer-secondary-button-bg-hover: var({colorToken.Footer.SecondaryButton.BackgroundHover});
                --footer-secondary-button-text: var({colorToken.Footer.SecondaryButton.Text});
                --footer-secondary-button-text-hover: var({colorToken.Footer.SecondaryButton.TextHover});
                --footer-secondary-button-border: var({colorToken.Footer.SecondaryButton.Border});
                --footer-secondary-button-border-hover: var({colorToken.Footer.SecondaryButton.BorderHover});

                /* ===== FOOTER LINK ===== */
                --footer-link-text: var({colorToken.Footer.Link.Text});
                --footer-link-text-hover: var({colorToken.Footer.Link.TextHover});
                --footer-link-underline: var({colorToken.Footer.Link.Underline});
                --footer-link-underline-hover: var({colorToken.Footer.Link.UnderlineHover});

                /* ===== FOOTER BADGE ===== */
                --footer-badge-bg: var({colorToken.Footer.Badge.Background});
                --footer-badge-text: var({colorToken.Footer.Badge.Text});
            ";

            _cssStyles.AppendLine(footerColorCss);
            return this;
        }

        public DesignBuilder BuildSections(ColorToken colorTokens)
        {
            if (colorTokens == null) return this;

            for (int i = 0; i < colorTokens.Sections.Count; i++)
            {
                var sectionColorCss = BuildSection(i + 1, colorTokens.Sections[i]);
                _cssStyles.AppendLine(sectionColorCss);
            }

            // build additional section. Max 10, default 5
            var maxSectionAllow = 10;
            var start = colorTokens.Sections.Count;
            var lastSection = colorTokens.Sections.Last();
            for (int i = start; i < maxSectionAllow; i++)
            {
                // if no additional => last section
                var sectionColorCss = BuildSection(i + 1, lastSection);
                _cssStyles.AppendLine(sectionColorCss);
            }

            return this;
        }

        public string BuildSection(int index, SectionSettings section)
        {
            var css = $@"
                /* SECTION {index} */
                --section-background: var({section.Base.Background});
                --section-heading: var({section.Base.Heading});
                --section-highlight-text: var({section.Base.HighlightText});
                --section-text: var({section.Base.Text});
                --section-line: var({section.Base.Line});

                --section-primary-button-bg: var({section.PrimaryButton.Background});
                --section-primary-button-bg-hover: var({section.PrimaryButton.BackgroundHover});
                --section-primary-button-text: var({section.PrimaryButton.Text});
                --section-primary-button-text-hover: var({section.PrimaryButton.TextHover});
                --section-primary-button-border: var({section.PrimaryButton.Border});
                --section-primary-button-border-hover: var({section.PrimaryButton.BorderHover});

                --section-secondary-button-bg: var({section.SecondaryButton.Background});
                --section-secondary-button-bg-hover: var({section.SecondaryButton.BackgroundHover});
                --section-secondary-button-text: var({section.SecondaryButton.Text});
                --section-secondary-button-text-hover: var({section.SecondaryButton.TextHover});
                --section-secondary-button-border: var({section.SecondaryButton.Border});
                --section-secondary-button-border-hover: var({section.SecondaryButton.BorderHover});

                --section-link-text: var({section.Link.Text});
                --section-link-text-hover: var({section.Link.TextHover});
                --section-link-underline: var({section.Link.Underline});
                --section-link-underline-hover: var({section.Link.UnderlineHover});

                --section-badge-bg: var({section.Badge.Background});
                --section-badge-text: var({section.Badge.Text});

                ";

            return new CssBuilder()
                .StartClass($"section-style-{index}")
                .AddCssBlock(css)
                .EndClass()
                .Build();
        }

        public string Build()
        {
            return _cssStyles.ToString();
        }
    }
}

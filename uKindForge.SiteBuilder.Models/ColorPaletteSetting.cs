namespace uKindForge.SiteBuilder.Models
{
    public class ColorPaletteSetting
    {
        public ColorPalette ColorPalette { get; set; }
        public ColorToken ColorToken { get; set; }
    }

    public class ColorPalette
    {
        public Primary Primary { get; set; }
        public Accent Accent { get; set; }
        public Neutral NeutralLight { get; set; }
        public Neutral NeutralDark { get; set; }
        public AdditionalColor AdditionalColor1 { get; set; }
        public AdditionalColor AdditionalColor2 { get; set; }
        public AdditionalColor AdditionalColor3 { get; set; }
        public AdditionalColor AdditionalColor4 { get; set; }
        public AdditionalColor AdditionalColor5 { get; set; }
    }

    public class Accent
    {
        public string Main { get; set; }
        public string Shade { get; set; }
        public string Tint { get; set; }
        public string OnMainText { get; set; }
    }

    public class ColorToken
    {
        public HeaderSettings Header { get; set; }
        public SectionSettings Footer { get; set; }
        public List<SectionSettings> Sections { get; set; } = [];
    }

    public class HeaderSettings
    {
        public HeaderFrame Frame { get; set; }
        public NavBar NavBar { get; set; }
        public Button PrimaryButton { get; set; }
        public Button SecondaryButton { get; set; }
        public DropdownMenu DropdownMenu { get; set; }
        public Hamburger Hamberger { get; set; }
    }

    public class HeaderFrame
    {
        public string HeaderBackground { get; set; }
        public string HeaderBorder { get; set; }
        public string BrandText { get; set; }
    }

    public class NavBar
    {
        public string MenuGroupBackground { get; set; }
        public string MenuGroupBorder { get; set; }
        public string MenuItemText { get; set; }
        public string MenuItemTextHover { get; set; }
        public string MenuItemBorder { get; set; }
        public string MenuItemBorderHover { get; set; }
        public string MenuItemBackground { get; set; }
        public string MenuItemBackgroundHover { get; set; }
        public string MenuItemUnderlineHover { get; set; }
        public string MenuItemSeparator { get; set; }
    }

    public class Button
    {
        public string Background { get; set; }
        public string BackgroundHover { get; set; }
        public string Text { get; set; }
        public string TextHover { get; set; }
        public string Border { get; set; }
        public string BorderHover { get; set; }
    }

    public class DropdownMenu
    {
        public string Background { get; set; }
        public string ItemText { get; set; }
        public string ItemTextHover { get; set; }
        public string ItemBackgroundHover { get; set; }
        public string Border { get; set; }
        public string SectionTitle { get; set; }
    }

    public class Hamburger
    {
        public string Text { get; set; }
    }

    public class SectionSettings
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public SectionBase Base { get; set; }
        public Button PrimaryButton { get; set; }
        public Button SecondaryButton { get; set; }
        public Link Link { get; set; }
        public Badge Badge { get; set; }
    }

    public class Badge
    {
        public string Text { get; set; }
        public string Background { get; set; }
    }

    public class Link
    {
        public string Text { get; set; }
        public string TextHover { get; set; }
        public string Underline { get; set; }
        public string UnderlineHover { get; set; }
    }

    public class SectionBase
    {
        public string Background { get; set; }
        public string Heading { get; set; }
        public string HighlightText { get; set; }
        public string Text { get; set; }
        public string Line { get; set; }
    }

    public class Neutral
    {
        public string Background { get; set; }
        public string Surface { get; set; }
        public string TextMain { get; set; }
        public string TextMuted { get; set; }
        public string Border { get; set; }
    }

    public class Primary
    {
        public string Main { get; set; }
        public string Shade { get; set; }
        public string Tint { get; set; }
        public string OnMainText { get; set; }
    }

    public class AdditionalColor
    {
        public string Main { get; set; }
    }
}

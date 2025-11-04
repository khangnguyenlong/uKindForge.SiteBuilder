namespace uKindForge.SiteBuilder.Core.Models
{
    public class ColorResponseModel
    {
        public ColorPaletteModel ColorPalette { get; set; }
        public ColorTokensModel ColorToken { get; set; }
    }

    public class ColorRequestModel
    {
        public string BrandColorHex { get; set; }
        public CriteriaModel Criteria { get; set; }

    }

    public class ColorPaletteModel
    {
        public PrimaryModel Primary { get; set; }
        public AccentModel Accent { get; set; }
        public NeutralModel NeutralLight { get; set; }
        public NeutralModel NeutralDark { get; set; }
        public AdditionalColorModel AdditionalColor1 { get; set; }
        public AdditionalColorModel AdditionalColor2 { get; set; }
        public AdditionalColorModel AdditionalColor3 { get; set; }
        public AdditionalColorModel AdditionalColor4 { get; set; }
        public AdditionalColorModel AdditionalColor5 { get; set; }
    }

    public class AccentModel
    {
        public string Main { get; set; }
        public string Shade { get; set; }
        public string Tint { get; set; }
        public string OnMainText { get; set; }
    }

    public class ColorTokensModel
    {
        public HeaderSettingsModel Header { get; set; }
        public SectionSettingsModel Footer { get; set; }
        public List<SectionSettingsModel> Sections { get; set; } = [];
    }

    public class HeaderSettingsModel
    {
        public HeaderFrameModel Frame { get; set; }
        public NavBarModel NavBar { get; set; }
        public ButtonModel PrimaryButton { get; set; }
        public ButtonModel SecondaryButton { get; set; }
        public DropdownMenuModel DropdownMenu { get; set; }
        public HamburgerModel Hamberger { get; set; }
    }

    public class HeaderFrameModel
    {
        public string HeaderBackground { get; set; }
        public string HeaderBorder { get; set; }
        public string BrandText { get; set; }
    }

    public class NavBarModel
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

    public class ButtonModel
    {
        public string Background { get; set; }
        public string BackgroundHover { get; set; }
        public string Text { get; set; }
        public string TextHover { get; set; }
        public string Border { get; set; }
        public string BorderHover { get; set; }
    }

    public class DropdownMenuModel
    {
        public string Background { get; set; }
        public string ItemText { get; set; }
        public string ItemTextHover { get; set; }
        public string ItemBackgroundHover { get; set; }
        public string Border { get; set; }
        public string SectionTitle { get; set; }
    }

    public class HamburgerModel
    {
        public string Text { get; set; }
    }

    public class SectionSettingsModel
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public SectionBaseModel Base { get; set; }
        public ButtonModel PrimaryButton { get; set; }
        public ButtonModel SecondaryButton { get; set; }
        public LinkModel Link { get; set; }
        public BadgeModel Badge { get; set; }
    }

    public class BadgeModel
    {
        public string Text { get; set; }
        public string Background { get; set; }
    }

    public class LinkModel
    {
        public string Text { get; set; }
        public string TextHover { get; set; }
        public string Underline { get; set; }
        public string UnderlineHover { get; set; }
    }

    public class SectionBaseModel
    {
        public string Background { get; set; }
        public string Heading { get; set; }
        public string HighlightText { get; set; }
        public string Text { get; set; }
        public string Line { get; set; }
    }

    public class NeutralModel
    {
        public string Background { get; set; }
        public string Surface { get; set; }
        public string TextMain { get; set; }
        public string TextMuted { get; set; }
        public string Border { get; set; }
    }

    public class PrimaryModel
    {
        public string Main { get; set; }
        public string Shade { get; set; }
        public string Tint { get; set; }
        public string OnMainText { get; set; }
    }

    public class AdditionalColorModel
    {
        public string Main { get; set; }
    }

    public class CriteriaModel
    {
        public AccentMode AccentMode { get; set; }
        public NeutralFlavor NeutralFlavor { get; set; }
        public HeaderStyle HeaderStyle { get; set; }
        public FooterStyle FooterStyle { get; set; }

        public double SectionAccentRatio { get; set; }
    }

    public enum AccentMode
    {
        Complement,
        Analog,
        Split
    }

    public enum NeutralFlavor
    {
        Clean,
        Warm,   // beige
        DarkFirst
    }

    public enum HeaderStyle
    {
        Light,
        Dark
    }

    public enum FooterStyle
    {
        Light,
        Dark
    }

}

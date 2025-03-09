namespace GoCoSiteBuilder.Models
{
    public class ColorSettings
    {
        public MainNavColorSettings MainNav { get; set; } = new();
        public SecondNavColorSettings SecondNav { get; set; } = new();
        public DropdownNavColorSettings DropdownNav { get; set; } = new();
        public FooterColorSettings Footer { get; set; } = new();
        public ContentColorSettings[] Contents { get; set; } = [];
        public ButtonColorSettings[] Buttons { get; set; } = [];
    }

    public class MainNavColorSettings
    {
        public string Link { get; set; } = "000";
        public string LinkHover { get; set; } = "000";
        public string LinkBackground { get; set; } = "000";
        public string LinkHoverBackground { get; set; } = "000";
        public string LinkBorder { get; set; } = "000";
        public string LinkBorderHover { get; set; } = "000";
        public string Background { get; set; } = "000";
    }

    public class SecondNavColorSettings
    {
        public string Link { get; set; } = "000";
        public string LinkHover { get; set; } = "000";
        public string Background { get; set; } = "000";
    }

    public class DropdownNavColorSettings
    {
        public string Link { get; set; } = "000";
        public string LinkHover { get; set; } = "000";
        public string LinkBackground { get; set; } = "000";
        public string LinkHoverBackground { get; set; } = "000";
        public string Background { get; set; } = "000";
    }

    public class FooterColorSettings
    {
        public string Text { get; set; } = "000";
        public string Heading { get; set; } = "000";
        public string Link { get; set; } = "000";
        public string LinkHover { get; set; } = "000";
        public string Background { get; set; } = "000";
    }

    public class ContentColorSettings
    {
        public Guid Id { get; set; }
        public string Text { get; set; } = "000";
        public string Heading { get; set; } = "000";
        public string Subheading { get; set; } = "000";
        public string Link { get; set; } = "000";
        public string LinkHover { get; set; } = "000";
        public string HighlightText { get; set; } = "000";
        public string HighlightBg { get; set; } = "000";
        public string Background { get; set; } = "000";
    }

    public class ButtonColorSettings
    {
        public Guid Id { get; set; }
        public string Text { get; set; } = "000";
        public string TextHover { get; set; } = "000";
        public string Border { get; set; } = "000";
        public string BorderHover { get; set; } = "000";
        public string Background { get; set; } = "000";
        public string BackgroundHover { get; set; } = "000";
    }
}

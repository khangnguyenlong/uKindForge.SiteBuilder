namespace GoCoSiteBuilder.Models
{
    public class LayoutSettings
    {
        public GeneralSettings General { get; set; } = new();    
        public HeaderDesktop HeaderDesktop { get; set; } = new();
        public HeaderMobile HeaderMobile { get; set; } = new();
        public ImageSettings Image { get; set; } = new();
        public VideoSettings Video { get; set; } = new();
        public CardSettings Card { get; set; } = new();
        public ButtonSettings Button { get; set; } = new();
        public LinkSettings Link { get; set; } = new();
        public HorizontalLineSettings HorizontalLine { get; set; } = new();
    }

    public class GeneralSettings
    {
        public bool BackToTop { get; set; }
    }

    public class HeaderDesktop
    {
        public string StyleValue { get; set; }
        public bool HeaderAlwaysOnTop { get; set; }
        public bool NavigationBarAlwaysOnTop { get; set; }
        public bool TransparentHeader { get; set; }
    }

    public class HeaderMobile
    {
        public string StyleValue { get; set; }
        public bool HeaderAlwaysOnTop { get; set; }
        public bool NavigationBarAlwaysOnTop { get; set; }
        public bool TransparentHeader { get; set; }
    }

    public class ImageSettings
    {
        public bool ZoomOnHover { get; set; }
        public int BorderRadius { get; set; }
        public string ShadowColor { get; set; }
        public int ShadowOpacity { get; set; }
        public int ShadowObssetX { get; set; }
        public int ShadowObssetY { get; set; }
        public int ShadowBlurRadius { get; set; }
    }

    public class VideoSettings
    {
        public int BorderRadius { get; set; }
        public string ShadowColor { get; set; }
        public int ShadowOpacity { get; set; }
        public int ShadowObssetX { get; set; }
        public int ShadowObssetY { get; set; }
        public int ShadowBlurRadius { get; set; }
    }

    public class CardSettings
    {
        public int BorderRadius { get; set; }
        public string ShadowColor { get; set; }
        public int ShadowOpacity { get; set; }
        public int ShadowObssetX { get; set; }
        public int ShadowObssetY { get; set; }
        public int ShadowBlurRadius { get; set; }
    }

    public class ButtonSettings
    {
        public int BorderRadius { get; set; }
    }

    public class LinkSettings
    {
        public bool MainNavUnderlineOnInit { get; set; }
        public bool MainNavUnderlineOnHover { get; set; }
        public bool SecondNavUnderlineOnInit { get; set; }
        public bool SecondNavUnderlineOnHover { get; set; }
        public bool DropdownUnderlineOnInit { get; set; }
        public bool DropdownUnderlineOnHover { get; set; }
        public bool ContentUnderlineOnInit { get; set; }
        public bool ContentUnderlineOnHover { get; set; }
        public bool FooterUnderlineOnInit { get; set; }
        public bool FooterUnderlineOnHover { get; set; }
        public bool ButtonUnderlineOnInit { get; set; }
        public bool ButtonUnderlineOnHover { get; set; }
    }

    public class HorizontalLineSettings
    {
        public int LineWidth { get; set; } = 1;
        public string LineStyle { get; set; } = "solid";
        public string CustomCSS { get; set; } = "";
    }
}

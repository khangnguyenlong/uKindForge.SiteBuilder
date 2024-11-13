namespace GoCoSiteBuilder.Models
{
    public class FontSettings
    {
        public IEnumerable<Font> FontBaselines { get; set; } = [];
        public IEnumerable<TypographySettings> Typographies { get; set; } = [];

        public Typography Text => GetTypographyByKey("Text");
        public Typography H1 => GetTypographyByKey("H1");
        public Typography H2 => GetTypographyByKey("H2");
        public Typography H3 => GetTypographyByKey("H3");
        public Typography H4 => GetTypographyByKey("H4");
        public Typography H5 => GetTypographyByKey("H5");
        public Typography H6 => GetTypographyByKey("H6");

        private Typography CreateDefaultTypography()
        {
            return new Typography()
            {
                Font = CreateDefaultFont(),
                FontSizeDesktop = "16px",
                FontSizeTablet = "16px",
                FontSizeMobile = "16px"
            };
        }

        private Font CreateDefaultFont()
        {
            return new Font()
            {
                Id = Guid.NewGuid(),
                FontFamily = "Inter",
                FontCategory = "sans-serif",
                FontStyle = "normal",
                FontWeight = "400"
            };
        }
        private Typography GetTypographyByKey(string key)
        {
            var typographySettings = Typographies.FirstOrDefault(x => x.Key == key);
            if (typographySettings == null) return CreateDefaultTypography();
            var font = FontBaselines.FirstOrDefault(x => x.Id == typographySettings.FontId) ?? CreateDefaultFont();
            return new Typography
            {
                Font = font,
                FontSizeDesktop = typographySettings.FontSizeDesktop,
                FontSizeMobile = typographySettings.FontSizeMobile,
                FontSizeTablet = typographySettings.FontSizeTablet,
            };
        }
    }

    public class Font
    {
        public Guid Id { get; set; }
        public string FontFamily { get; set; }
        public string FontCategory { get; set; }
        public string FontStyle { get; set; }
        public string FontWeight { get; set; }
    }

    public class Typography
    {
        public Font Font { get; set; }
        public string FontSizeDesktop { get; set; }
        public string FontSizeTablet { get; set; }
        public string FontSizeMobile { get; set; }
    }

    public class TypographySettings
    {
        public string Key { get; set; }
        public Guid FontId { get; set; }
        public string FontSizeDesktop { get; set; }
        public string FontSizeTablet { get; set; }
        public string FontSizeMobile { get; set; }
    }
}

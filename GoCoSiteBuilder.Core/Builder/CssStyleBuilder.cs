using GoCoSiteBuilder.Core.Constants;
using GoCoSiteBuilder.Models;
using System.Text;
using Umbraco.Cms.Core.Models.Blocks;

namespace GoCoSiteBuilder.Core.Builder
{
    public class CssStyleBuilder
    {
        private readonly StringBuilder _cssStyles = new();

        public CssStyleBuilder() { }

        public CssStyleBuilder MakeButtonStyle(ButtonColorSettings[] buttonColorSettings)
        {
            if (buttonColorSettings?.Any() == false) return this;

            for (int i = 0; i < buttonColorSettings.Count(); i++)
            {
                var buttonColor = buttonColorSettings[i];

                var buttonCss = new CssBuilder()
                    .StartClass($"{AppConstants.CssClassName.BUTTON_PREFIX}{i}")
                    .AddBackgroundColor($"#{buttonColor.Background}")
                    .AddColor($"#{buttonColor.Text}")
                    .AddBorderColor($"#{buttonColor.Border}")
                    .EndClass()
                    // hover
                    .StartClassWithHover($"{AppConstants.CssClassName.BUTTON_PREFIX}{i}")
                    .AddBackgroundColor($"#{buttonColor.BackgroundHover}")
                    .AddColor($"#{buttonColor.TextHover}")
                    .AddBorderColor($"#{buttonColor.BorderHover}")
                    .EndClass()
                    .Build();

                _cssStyles.AppendLine(buttonCss);
            }
            return this;
        }

        public CssStyleBuilder MakeContentStyle(ContentColorSettings[] contentColorSettings)
        {
            //TODO complete this
            if (contentColorSettings?.Any() == false) return this;

            for (int i = 0; i < contentColorSettings.Count(); i++)
            {
                var contentColor = contentColorSettings[i];

                var buttonCss = new CssBuilder()
                    .StartClass($"{AppConstants.CssClassName.BACKGROUND_CONTENT_PREFIX}{i}")
                    .AddBackgroundColor($"#{contentColor.Background}")
                    .AddCssAttribute("--heading-content-color", $"#{contentColor.Heading}")
                    .AddCssAttribute("--subheading-content-color", $"#{contentColor.Subheading}")
                    .AddCssAttribute("--text-content-color", $"#{contentColor.Text}")
                    .EndClass()

                    .StartClass("heading-content")
                    .AddColor("var(--heading-content-color) !important")
                    .EndClass()

                    .StartClass("subheading-content")
                    .AddColor("var(--subheading-content-color) !important")
                    .EndClass()

                    .StartClass("text-content")
                    .AddColor("var(--text-content-color) !important")
                    .EndClass()

                    .Build();

                _cssStyles.AppendLine(buttonCss);
            }
            return this;
        }

        public string Build() 
        {
            return _cssStyles.ToString();
        }
    }
}

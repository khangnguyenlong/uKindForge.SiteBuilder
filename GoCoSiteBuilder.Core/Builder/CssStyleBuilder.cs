using GoCoSiteBuilder.Core.Constants;
using GoCoSiteBuilder.Models;
using System.Text;
using Umbraco.Cms.Core.Models.Blocks;

namespace GoCoSiteBuilder.Core.Builder
{
    public class CssStyleBuilder
    {
        private StringBuilder _cssStyles = new();

        public CssStyleBuilder() { }

        public CssStyleBuilder MakeButtonStyle(BlockListModel buttonBlockList)
        {
            if (buttonBlockList?.Any() == false) return this;

            for (int i = 0; i < buttonBlockList.Count; i++)
            {
                if (buttonBlockList[i].Content is not ButtonColor buttonColor) continue;

                var buttonCss = new CssBuilder()
                    .StartClass($"{AppConstants.CssClassName.BUTTON_PREFIX}{i}")
                    .AddBackgroundColor(buttonColor.BgBtnColor)
                    .AddColor(buttonColor.TextBtnColor)
                    .AddBorderColor(buttonColor.BorderBtnColor)
                    .EndClass()
                    // hover
                    .StartClassWithHover($"{AppConstants.CssClassName.BUTTON_PREFIX}{i}")
                    .AddBackgroundColor(buttonColor.BgHoverBtnColor)
                    .AddColor(buttonColor.TextHoverBtnColor)
                    .AddBorderColor(buttonColor.BorderHoverBtnColor)
                    .EndClass()
                    .Build();

                _cssStyles.AppendLine(buttonCss);
            }
            return this;
        }

        public CssStyleBuilder MakeContentStyle(BlockListModel buttonBlockList)
        {
            //TODO complete this
            if (buttonBlockList?.Any() == false) return this;

            for (int i = 0; i < buttonBlockList.Count; i++)
            {
                if (buttonBlockList[i].Content is not ContentColor contentColor) continue;

                var buttonCss = new CssBuilder()
                    .StartClass($"{AppConstants.CssClassName.BACKGROUND_CONTENT_PREFIX}{i}")
                    .AddBackgroundColor(contentColor.BackgroundColor)
                    .AddCssAttribute("--heading-content-color", contentColor.HeadingColor)
                    .AddCssAttribute("--text-content-color", contentColor.TextColor)
                    .EndClass()

                    .StartClass("heading-content")
                    .AddColor("var(--heading-content-color) !important")
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

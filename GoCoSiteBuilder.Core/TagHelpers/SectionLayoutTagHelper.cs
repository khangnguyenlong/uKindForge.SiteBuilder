using GoCoSiteBuilder.Core.Constants;
using GoCoSiteBuilder.Core.ViewModels;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;
using System.Text;
using Umbraco.Cms.Core.Models;
using Umbraco.Extensions;

namespace GoCoSiteBuilder.Core.TagHelpers
{
    [HtmlTargetElement("section-layout")]
    public class SectionLayoutTagHelper : TagHelper
    {
        public required LayoutSettingsViewModel Info { get; set; }

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "section";
            output.TagMode = TagMode.StartTagAndEndTag;

            if (Info == null) return;
            var layoutSettings = Info;

            var bgImage = layoutSettings.BackgroundImage;

            var marginTopStyle = layoutSettings.IsAddMarginTop ? layoutSettings.MarginTop : 0;
            var marginBottomStyle = layoutSettings.IsAddMarginBottom ? layoutSettings.MarginBottom : 0;

            var paddingTopStyle = layoutSettings.IsAddPaddingTop ? layoutSettings.PaddingTop : 0;
            var paddingBottomStyle = layoutSettings.IsAddPaddingBottom ? layoutSettings.PaddingBottom : 0;

            var fullWidth = layoutSettings.FullWidth ? "container-fluid" : "container";

            //TODO move to builder
            var styleAttributes = new StringBuilder();
            styleAttributes.Append($"margin-top: {marginTopStyle}").Append("px;");
            styleAttributes.Append($"margin-bottom: {marginBottomStyle}").Append("px;");
            styleAttributes.Append($"padding-top: {paddingTopStyle}").Append("px;");
            styleAttributes.Append($"padding-bottom: {paddingBottomStyle}").Append("px;");

            switch (layoutSettings.BackgroundType)
            {
                case "image":
                    if (bgImage != null)
                    {
                        styleAttributes.Append($"background-image: url({bgImage.GetCropUrl(imageCropMode: ImageCropMode.Min, width: 1920)});");
                    }
                    break;
                case "video":
                    //TODO
                    break;
                default:
                    break;
            }

            output.Attributes.Add("style", styleAttributes.ToString());
            output.Attributes.Add("class", $"{AppConstants.CssClassName.BACKGROUND_CONTENT_PREFIX}{layoutSettings.BackgroundColor}");

            var childContent = await output.GetChildContentAsync();

            var divContainer = new TagBuilder("div");
            divContainer.AddCssClass(fullWidth);
            divContainer.InnerHtml.AppendHtml(childContent.GetContent());

            output.Content.SetHtmlContent(divContainer);
        }
	}
}

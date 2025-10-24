using System.Reflection.Emit;
using System.Text;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Razor.TagHelpers;
using uKindForge.SiteBuilder.Core.Constants;
using uKindForge.SiteBuilder.Core.Helpers;
using uKindForge.SiteBuilder.Core.ViewModels;
using Umbraco.Cms.Core.Models;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.TagHelpers
{
    [HtmlTargetElement("section-layout")]
    public class SectionLayoutTagHelper(DesignHelper designHelper) : TagHelper
    {
        public required LayoutSettingsViewModel Info { get; set; }

        private readonly DesignHelper _designHelper = designHelper;

        public override async Task ProcessAsync(TagHelperContext context, TagHelperOutput output)
        {
            if (Info == null) return;

            if (string.IsNullOrEmpty(Info.BackgroundType))
            {
                Info = CreateDefaultLayoutSettings();
            }

            output.TagName = "section";
            output.TagMode = TagMode.StartTagAndEndTag;

            // === 1. Inline Style Attributes ===
            var styleAttributes = new StringBuilder();
            styleAttributes.Append($"padding-top: {Info.Top}rem;");
            styleAttributes.Append($"padding-bottom: {Info.Bottom}rem;");

            // === 2. CSS Classes ===
            var cssClass = new StringBuilder();
            cssClass.Append("section-block");

            if (Info.FullScreen)
            {
                cssClass.Append(" full-screen");
                //styleAttributes.Append("height: 100vh; min-height: 400px; display: flex; align-items: center;");
            }

            // === 3. Background Type Handling ===
            switch (Info.BackgroundType?.ToLowerInvariant())
            {
                case "color":
                    if (!string.IsNullOrWhiteSpace(Info.OrderColor))
                    {
                        cssClass.Append($" {_designHelper.GetBackgroundClass(Info.OrderColor)}");
                    }
                    break;

                case "image":
                    var imageUrl = Info.BackgroundImage?.GetCropUrl(imageCropMode: ImageCropMode.Min, width: 1920) ?? Info.BackgroundImageUrl;

                    if (!string.IsNullOrWhiteSpace(imageUrl))
                    {
                        styleAttributes.Append($"background-image: url('{imageUrl}'); background-size: cover; background-position: center;");
                    }

                    // For image, we can use overlay as background-color fallback
                    if (Info.EnableOverlay && !string.IsNullOrWhiteSpace(Info.OverlayColor))
                    {
                        //var rgba = CssHelper.HexToRgba(Info.OverlayColor, Info.OverlayOpacity);
                        //styleAttributes.Append($"background-color: {rgba};");
                        HandleOverlay(output);
                    }

                    break;

                case "video":
                    cssClass.Append(" has-video-bg");
                    break;
            }

            // === 4. Set Attributes ===
            output.Attributes.SetAttribute("class", cssClass.ToString());
            output.Attributes.SetAttribute("style", styleAttributes.ToString());

            // === 5. Video Background (rendered before content) ===
            if (Info.BackgroundType == "video")
            {
                var videoSrc = Info.BackgroundVideo?.Url() ?? Info.BackgroundVideoUrl;
                if (!string.IsNullOrWhiteSpace(videoSrc))
                {
                    var videoTag = $@"
                    <video class='video-bg' autoplay muted loop playsinline>
                        <source src='{videoSrc}' type='video/mp4' />
                    </video>";
                    output.PreContent.AppendHtml(videoTag);
                }

                HandleOverlay(output);
            }

            // === 6. Content Container ===
            var containerDiv = new TagBuilder("div");
            containerDiv.AddCssClass(Info.FullWidth ? "container-fluid" : "container");

            var content = await output.GetChildContentAsync();
            containerDiv.InnerHtml.AppendHtml(content.GetContent());

            output.Content.SetHtmlContent(containerDiv);
        }

        private void HandleOverlay(TagHelperOutput output)
        {
            // Optional Overlay Layer as HTML element
            if (Info.EnableOverlay && !string.IsNullOrWhiteSpace(Info.OverlayColor))
            {
                var rgba = CssHelper.HexToRgba(Info.OverlayColor, Info.OverlayOpacity);
                var overlayDiv = $@"<div class='bg-overlay' style='background-color:{rgba};'></div>";
                output.PreContent.AppendHtml(overlayDiv);
            }
        }

        private LayoutSettingsViewModel CreateDefaultLayoutSettings()
        {
            return new LayoutSettingsViewModel
            {
                BackgroundType = "color",
                OrderColor = "0",
                Top = 6,
                Bottom = 6
            };
        }
    }
}

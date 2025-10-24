using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using uKindForge.SiteBuilder.Core.ViewModels;
using uKindForge.SiteBuilder.Models;
using Umbraco.Cms.Core.Models.Blocks;

namespace uKindForge.SiteBuilder.Core.Helpers
{
    public static class HtmlHelper
    {
        const string PARTIAL_VIEW_NAME_SHARED = "~/Views/Partials/blockgrid/Components/Shared";
        const string CONTENT_ALIAS = "~/Views/Partials/blockgrid/Components/Shared";

        public static Task<IHtmlContent> PartialButtonLinkAsync(this IHtmlHelper htmlHelper, ButtonViewModel model) => htmlHelper.PartialSharedAsync("ButtonLink", model);
        public static Task<IHtmlContent> PartialHeadingAsync(this IHtmlHelper htmlHelper, HeadingViewModel model) => htmlHelper.PartialSharedAsync("Heading", model);
        public static Task<IHtmlContent> PartialSubheadingAsync(this IHtmlHelper htmlHelper, HeadingViewModel model) => htmlHelper.PartialSharedAsync("Subheading", model);
        public static Task<IHtmlContent> PartialTextAsync(this IHtmlHelper htmlHelper, TextViewModel model) => htmlHelper.PartialSharedAsync("Text", model);
        public static Task<IHtmlContent> PartialImageLinkAsync(this IHtmlHelper htmlHelper, ImageViewModel model) => htmlHelper.PartialSharedAsync("ImageLink", model);
        public static Task<IHtmlContent> PartialImageLinkAsync(this IHtmlHelper htmlHelper, ImageBlock content, ImageBlockSettings settings)
        {
            return htmlHelper.PartialSharedAsync("ImageLink", new ImageViewModel(content.Image)
            {
                ImageAlt = content.Image?.Name, // TODO Get from SEO block settings
                Title = content.Image?.Name, // TODO Get from SEO block settings
                UseImageUrl = content.UseImageUrl,
                ImageUrl = content.ImageUrl,
                Link = content.Link,
                Overlay = settings?.Overlay ?? false,
                Opacity = settings?.Opacity ?? 0.0m,
                OverlayColor = settings?.OverlayColor,
            });
        }

        public static Task<IHtmlContent> PartialLineIconLinkAsync(this IHtmlHelper htmlHelper, LineIconLinkViewModel model) => htmlHelper.PartialSharedAsync("LineIconLink", model);
        public static Task<IHtmlContent> PartialLineIconLinkListAsync(this IHtmlHelper htmlHelper, BlockListModel model) => htmlHelper.PartialSharedAsync("LineIconLinkList", model);
        public static Task<IHtmlContent> PartialLineIconAsync(this IHtmlHelper htmlHelper, LineIconViewModel model) => htmlHelper.PartialSharedAsync("LineIcon", model);

        public static Task<IHtmlContent> PartialSharedAsync(this IHtmlHelper htmlHelper, string partialViewName, object model) 
        {
            return htmlHelper.PartialAsync($"{PARTIAL_VIEW_NAME_SHARED}/{partialViewName}.cshtml", model);
        }
    }
}

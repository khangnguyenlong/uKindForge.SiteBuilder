using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace GoCoSiteBuilder.Core.Helpers
{
    public static class HtmlHelper
    {
        const string PARTIAL_VIEW_NAME_SHARED = "~/Views/Partials/blockgrid/Components/Shared";

        public static Task<IHtmlContent> PartialButtonLinkAsync(this IHtmlHelper htmlHelper, object model) => htmlHelper.PartialSharedAsync("ButtonLink", model);
        public static Task<IHtmlContent> PartialHeadingAsync(this IHtmlHelper htmlHelper, object model) => htmlHelper.PartialSharedAsync("Heading", model);
        public static Task<IHtmlContent> PartialTextAsync(this IHtmlHelper htmlHelper, object model) => htmlHelper.PartialSharedAsync("Text", model);
        public static Task<IHtmlContent> PartialImageLinkAsync(this IHtmlHelper htmlHelper, object model) => htmlHelper.PartialSharedAsync("ImageLink", model);

        public static Task<IHtmlContent> PartialSharedAsync(this IHtmlHelper htmlHelper, string partialViewName, object model) 
        {
            return htmlHelper.PartialAsync($"{PARTIAL_VIEW_NAME_SHARED}/{partialViewName}.cshtml", model);
        }
    }
}

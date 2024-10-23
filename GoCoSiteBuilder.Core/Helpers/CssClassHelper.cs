using GoCoSiteBuilder.Core.Constants;

namespace GoCoSiteBuilder.Core.Helpers
{
    public static class CssClassHelper
    {
        public static string GetTextAlign(string align, bool applyDefaultValue = true) 
        {
            switch (align?.ToLower())
            {
                case "start":
                case "left":
                    return "text-start";

                case "center":
                    return "text-center";

                case "end":
                case "right":
                    return "text-end";

                default:
                    return applyDefaultValue ? "text-start" : "";
            }
        }

        public static string GetJustifyContentAlign(string align)
        {
            switch (align?.ToLower())
            {
                case "start":
                case "left":
                    return "justify-content-start";

                case "center":
                    return "justify-content-center";

                case "end":
                case "right":
                    return "justify-content-end";

                default:
                    return "justify-content-start";
            }
        }

        public static string GetVerticalContentAlign(string align)
        {
            switch (align?.ToLower())
            {
                case "start":
                case "top":
                    return "align-items-start";

                case "center":
                    return "align-items-center";

                case "end":
                case "bottom":
                    return "align-items-end";

                default:
                    return "align-items-start";
            }
        }

        public static string GetBackgroundClass(string bgContentOrder) 
        {
            var order = string.IsNullOrEmpty(bgContentOrder) ? "0" : bgContentOrder;
            return $"{AppConstants.CssClassName.BACKGROUND_CONTENT_PREFIX}{order}";
        }

        public static string GetButtonClass(string btnDesignOrder)
        {
            var order = string.IsNullOrEmpty(btnDesignOrder) ? "0" : btnDesignOrder;
            return $"{AppConstants.CssClassName.BUTTON_PREFIX}{order}";
        }

        public static string GetFullWithClass(bool? isFullWidth)
        {
            return isFullWidth == true ? "container-fluid" : "container";
        }
    }
}

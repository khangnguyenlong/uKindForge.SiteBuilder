using uKindForge.SiteBuilder.Core.Constants;
using uKindForge.SiteBuilder.Models;

namespace uKindForge.SiteBuilder.Core.Helpers
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

        public static string GetBackgroundClass(string bgContentOrder, DesignDetail designDetail) 
        {
            return "";
            //return GetContentClass(bgContentOrder, designDetail?.ColorSettings?.Contents, AppConstants.CssClassName.BACKGROUND_CONTENT_PREFIX);
		}

		public static string GetButtonClass(string btnDesignOrder, DesignDetail designDetail)
        {
            return "";
            //return GetContentClass(btnDesignOrder, designDetail?.ColorSettings?.Buttons, AppConstants.CssClassName.BUTTON_PREFIX);
        }

        public static string GetContentClass<T>(string order, IEnumerable<T> list, string prefix)
        {
            if(string.IsNullOrEmpty(order) || !int.TryParse(order, out var designOrder))
            {
                return $"{prefix}0";
            }
	        var orderResult = list == null || list.ElementAtOrDefault(designOrder) == null ? "0" : order;
	        return $"{prefix}{orderResult}";
        }

		public static string GetFullWithClass(bool? isFullWidth)
        {
            return isFullWidth == true ? "container-fluid" : "container";
        }

        public static string GetColClass(string columns, int colSpans = 12, int defaultValue = 3) 
        {
            var columnsSafe = int.TryParse(columns, out int columnsParsed) ? columnsParsed: defaultValue;
            return GetColClass(columnsSafe, colSpans);
        }

        public static string GetColClass(int columns, int colSpans = 12)
        {
            columns = Math.Clamp(columns, 1, 12);
            int smCols = Math.Min(columns, 2);
            int mdCols = Math.Min(columns, 3);
            int lgCols = Math.Min(columns, 4);

            int smSpan = colSpans / smCols; // 12/2=6
            int mdSpan = colSpans / mdCols; // 12/3=4
            int lgSpan = colSpans / lgCols; // 12/4=3

            return $"col-12 col-sm-{smSpan} col-md-{mdSpan} col-lg-{lgSpan}";
        }

    }
}

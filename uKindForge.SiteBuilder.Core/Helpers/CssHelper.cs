using System.Globalization;

namespace uKindForge.SiteBuilder.Core.Helpers
{
    public static class CssHelper
    {
        public static string HexToRgba(string hex, decimal opacity)
        {
            if (string.IsNullOrEmpty(hex)) return "rgba(0,0,0,0)";

            hex = hex.TrimStart('#');
            if (hex.Length != 6) return "rgba(0,0,0,0)";

            var r = int.Parse(hex.Substring(0, 2), NumberStyles.HexNumber);
            var g = int.Parse(hex.Substring(2, 2), NumberStyles.HexNumber);
            var b = int.Parse(hex.Substring(4, 2), NumberStyles.HexNumber);

            return $"rgba({r},{g},{b},{opacity.ToString(CultureInfo.InvariantCulture)})";
        }
    }

}

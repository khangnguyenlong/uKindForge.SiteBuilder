using System.Drawing;
using System.Globalization;

namespace uKindForge.SiteBuilder.Core.Helpers
{
    public static class ColorHelper
    {
        public static Color ParseHex(string hex)
        {
            if (string.IsNullOrWhiteSpace(hex))
                throw new ArgumentException("hex is null or empty");

            hex = hex.Trim();

            if (hex.StartsWith("#"))
                hex = hex.Substring(1);

            if (hex.Length == 3)
            {
                // #RGB -> #RRGGBB
                var r = new string(hex[0], 2);
                var g = new string(hex[1], 2);
                var b = new string(hex[2], 2);
                hex = r + g + b;
            }

            if (hex.Length != 6)
                throw new ArgumentException("hex must be 3 or 6 hex characters");

            var rByte = byte.Parse(hex.Substring(0, 2), NumberStyles.HexNumber);
            var gByte = byte.Parse(hex.Substring(2, 2), NumberStyles.HexNumber);
            var bByte = byte.Parse(hex.Substring(4, 2), NumberStyles.HexNumber);

            return Color.FromArgb(rByte, gByte, bByte);
        }

        // Color -> "#RRGGBB"
        public static string ToHex(Color c)
        {
            return $"#{c.R:X2}{c.G:X2}{c.B:X2}";
        }

        public static Color Darken(Color c, int percent)
        {
            percent = Clamp(percent, 0, 100);
            double factor = 1 - (percent / 100.0);

            int r = (int)(c.R * factor);
            int g = (int)(c.G * factor);
            int b = (int)(c.B * factor);

            return Color.FromArgb(Clamp(r, 0, 255), Clamp(g, 0, 255), Clamp(b, 0, 255));
        }

        public static Color Tint(Color c, int percentWhite)
        {
            percentWhite = Clamp(percentWhite, 0, 100);
            double w = percentWhite / 100.0;
            double basePart = 1 - w;

            int r = (int)(c.R * basePart + 255 * w);
            int g = (int)(c.G * basePart + 255 * w);
            int b = (int)(c.B * basePart + 255 * w);

            return Color.FromArgb(Clamp(r, 0, 255), Clamp(g, 0, 255), Clamp(b, 0, 255));
        }

        public static Color GetOnColor(Color bg)
        {
            double lum = RelativeLuminance(bg);
            return lum > 0.6 ? Color.Black : Color.White;
        }

        // RGB -> HSL
        public static HslColor ToHsl(Color c)
        {
            double r = c.R / 255.0;
            double g = c.G / 255.0;
            double b = c.B / 255.0;

            double max = Math.Max(r, Math.Max(g, b));
            double min = Math.Min(r, Math.Min(g, b));
            double h = 0, s, l = (max - min) / 2.0 + min; // l = (max+min)/2

            if (Math.Abs(max - min) < 0.00001)
            {
                // gray
                s = 0;
                h = 0;
            }
            else
            {
                double d = max - min;
                s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

                if (max == r)
                    h = (g - b) / d + (g < b ? 6 : 0);
                else if (max == g)
                    h = (b - r) / d + 2;
                else
                    h = (r - g) / d + 4;

                h /= 6.0;
            }

            return new HslColor
            {
                H = h * 360.0,
                S = s,
                L = l
            };
        }

        // HSL -> RGB
        public static Color FromHsl(HslColor hsl)
        {
            double h = hsl.H / 360.0;
            double s = hsl.S;
            double l = hsl.L;

            double r, g, b;

            if (s == 0)
            {
                r = g = b = l; // achromatic
            }
            else
            {
                double q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                double p = 2 * l - q;
                r = Hue2Rgb(p, q, h + 1.0 / 3.0);
                g = Hue2Rgb(p, q, h);
                b = Hue2Rgb(p, q, h - 1.0 / 3.0);
            }

            return Color.FromArgb(
                Clamp((int)Math.Round(r * 255), 0, 255),
                Clamp((int)Math.Round(g * 255), 0, 255),
                Clamp((int)Math.Round(b * 255), 0, 255)
            );
        }

        private static int Clamp(int v, int min, int max)
        {
            if (v < min) return min;
            if (v > max) return max;
            return v;
        }

        private static double Hue2Rgb(double p, double q, double t)
        {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1.0 / 6.0) return p + (q - p) * 6.0 * t;
            if (t < 1.0 / 2.0) return q;
            if (t < 2.0 / 3.0) return p + (q - p) * (2.0 / 3.0 - t) * 6.0;
            return p;
        }

        // WCAG-ish relative luminance for sRGB
        private static double RelativeLuminance(Color c)
        {
            double RsRGB = c.R / 255.0;
            double GsRGB = c.G / 255.0;
            double BsRGB = c.B / 255.0;

            double R = (RsRGB <= 0.03928) ? RsRGB / 12.92 : Math.Pow((RsRGB + 0.055) / 1.055, 2.4);
            double G = (GsRGB <= 0.03928) ? GsRGB / 12.92 : Math.Pow((GsRGB + 0.055) / 1.055, 2.4);
            double B = (BsRGB <= 0.03928) ? BsRGB / 12.92 : Math.Pow((BsRGB + 0.055) / 1.055, 2.4);

            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
        }


        public struct HslColor
        {
            public double H; // 0-360
            public double S; // 0-1
            public double L; // 0-1
        }
    }
}

using System.Text;

namespace uKindForge.SiteBuilder.Core.Builder
{
    public class CssBuilder
    {
        private readonly StringBuilder _cssStyles = new();

        public CssBuilder() { }

        public CssBuilder(StringBuilder cssStyles)
        {
            _cssStyles = cssStyles;
        }

        public CssBuilder StartClass(string styleName)
        {
            _cssStyles.AppendLine($".{styleName}{{");
            return this;
        }

        public CssBuilder StartClasses(params string[] styleName)
        {
            _cssStyles.AppendLine($".{String.Join(" .", styleName)}{{");
            return this;
        }

        public CssBuilder StartClassWithHover(string styleName)
        {
            StartClassState(styleName, "hover");
            return this;
        }

        public CssBuilder StartClassState(string styleName, string elementState = "")
        {
            var state = string.IsNullOrEmpty(elementState) ? "" : $":{elementState}";
            _cssStyles.AppendLine($".{styleName}{state}{{");
            return this;
        }

        public CssBuilder EndClass()
        {
            _cssStyles.AppendLine("}");
            return this;
        }

        public CssBuilder AddBackgroundColor(string value) => AddCssAttribute("background-color", value);

        public CssBuilder AddColor(string value) => AddCssAttribute("color", value);

        public CssBuilder AddBorderColor(string value) => AddCssAttribute("border-color", value);

        public CssBuilder AddCssAttribute(string name, string value)
        {
            _cssStyles.AppendLine($"{name}: {value};");
            return this;
        }

        public string Build() => _cssStyles.ToString();
    }
}

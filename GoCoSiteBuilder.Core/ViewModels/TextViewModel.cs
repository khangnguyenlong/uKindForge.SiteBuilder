using Umbraco.Cms.Core.Strings;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class TextViewModel
    {
        public IHtmlEncodedString HtmlValue { get; set; }
        public string Value { get; set; }

        public TextViewModel(IHtmlEncodedString htmlBalue) 
        {
            HtmlValue = htmlBalue;
        }
        public TextViewModel(string value)
        {
            Value = value;
        }
    }
}

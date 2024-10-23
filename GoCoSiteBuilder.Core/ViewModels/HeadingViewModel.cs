using Umbraco.Cms.Core.Strings;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class HeadingViewModel
    {
        public HeadingViewModel(string value) 
        {
            Value = value;
        }

        public HeadingViewModel(IHtmlEncodedString htmlValue)
        {
            HtmlValue = htmlValue;
        }

        public string Value { get; set; }
        public IHtmlEncodedString HtmlValue { get; set; }
        public string Align { get; set; }
        public string LinkUrl { get; set; }
    }
}

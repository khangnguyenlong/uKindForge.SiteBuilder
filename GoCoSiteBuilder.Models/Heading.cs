using Umbraco.Cms.Core.Models;

namespace GoCoSiteBuilder.Models
{
    public class Heading
    {
        public string HeadingText { get; set; }
        public string HeadingTag { get; set; }
        public string Align { get; set; }
        public Link Link { get; set; }
    }
}

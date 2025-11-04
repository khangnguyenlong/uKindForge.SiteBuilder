using Umbraco.Cms.Core.Models;

namespace uKindForge.SiteBuilder.Models
{
    public class Heading
    {
        public string HeadingText { get; set; }
        public string HeadingTag { get; set; }
        public string Align { get; set; }
        public Umbraco.Cms.Core.Models.Link Link { get; set; }
        //public bool Bold { get; set; }
    }
}

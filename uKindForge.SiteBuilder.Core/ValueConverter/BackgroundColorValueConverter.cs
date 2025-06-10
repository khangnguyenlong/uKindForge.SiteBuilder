using uKindForge.SiteBuilder.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace uKindForge.SiteBuilder.Core.ValueConverter
{
    public class BackgroundColorValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("uKindForge.BackgroundColor");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(string);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.None;

        public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType,
            object? source, bool preview)
        {
            if (source == null) return "0";

            var intermediate = source.ToString();            
            return string.IsNullOrEmpty(intermediate) || !int.TryParse(intermediate, out _) ? "0" : intermediate;
        }
    }
}

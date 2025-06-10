using uKindForge.SiteBuilder.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.ValueConverter
{
    public class TogglePlusValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("uKindForge.TogglePlus");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(bool);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.None;

        public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType,
            object? source, bool preview)
        {
            if (source == null) return string.Empty;

            var intermediate = source.ToString();            
            return intermediate == "1";
        }
    }
}

using GoCoSiteBuilder.Models;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace GoCoSiteBuilder.Core.ValueConverter
{
    public class HeadingValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("GoCo.Heading");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(Heading);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.None;

        public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType,
            object? source, bool preview)
        {
            if (source == null) return string.Empty;

            var intermediate = source.ToString();
            if (StringExtensions.DetectIsJson(intermediate))
            {
                try
                {
                    var heading = JsonConvert.DeserializeObject<Heading>(intermediate);
                    if (heading != null) return heading;
                }
                catch
                {
                }
            }
            return (object)intermediate;
        }
    }
}

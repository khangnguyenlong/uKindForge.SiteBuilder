using uKindForge.SiteBuilder.Models;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.ValueConverter
{
    public class ColorSettingsValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) =>
            propertyType.EditorAlias.Equals("uKindForge.ColorSettings");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(ColorSettings);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) =>
            PropertyCacheLevel.None;

        public override object? ConvertSourceToIntermediate(IPublishedElement owner,
            IPublishedPropertyType propertyType,
            object? source, bool preview)
        {
            if (source == null) return null;

            var intermediate = source.ToString();
            if (!StringExtensions.DetectIsJson(intermediate)) return null;

            try
            {
                var jsonObject = JsonConvert.DeserializeObject<ColorSettings>(intermediate);
                return jsonObject;
            }
            catch
            {
                return null;
            }
        }
    }
}

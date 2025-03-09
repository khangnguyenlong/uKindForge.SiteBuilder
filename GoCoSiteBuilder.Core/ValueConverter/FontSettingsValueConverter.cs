using GoCoSiteBuilder.Models;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace GoCoSiteBuilder.Core.ValueConverter
{
    public class FontSettingsValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("GoCo.FontSettings");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(FontSettings);

        public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) =>
            PropertyCacheLevel.None;

        public override object? ConvertSourceToIntermediate(IPublishedElement owner,
            IPublishedPropertyType propertyType,
            object? source, bool preview)
        {
            if (source == null) return string.Empty;

            var intermediate = source.ToString();
            if (StringExtensions.DetectIsJson(intermediate))
            {
                try
                {
                    var jsonObject = JsonConvert.DeserializeObject<FontSettings>(intermediate);
                    if (jsonObject != null) return jsonObject;
                }
                catch
                {
                }
            }

            return (object)intermediate;
        }
    }
}

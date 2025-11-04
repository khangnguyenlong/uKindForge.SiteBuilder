using uKindForge.SiteBuilder.Models;
using Newtonsoft.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Extensions;

namespace uKindForge.SiteBuilder.Core.ValueConverter
{
    public class ColorPaletteValueConverter : PropertyValueConverterBase
    {
        public override bool IsConverter(IPublishedPropertyType propertyType) =>
            propertyType.EditorAlias.Equals("uKindForge.ColorPalette");

        public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(ColorPaletteSetting);

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
                var jsonObject = JsonConvert.DeserializeObject<ColorPaletteSetting>(intermediate);
                return jsonObject;
            }
            catch
            {
                return null;
            }
        }
    }
}

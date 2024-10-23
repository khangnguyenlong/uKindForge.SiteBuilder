using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace GoCoSiteBuilder.Core.ValueConverter
{
	public class BaselineColorPickerValueConverter : PropertyValueConverterBase
	{
		public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("GoCo.BaselineColorPicker");

		public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(string);

		public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.None;

		public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType,
			object? source, bool preview)
		{
			if (source == null) return string.Empty;

			var intermediate = source.ToString();
			return intermediate.StartsWith('#') ? intermediate : $"#{intermediate}";
		}
	}
}

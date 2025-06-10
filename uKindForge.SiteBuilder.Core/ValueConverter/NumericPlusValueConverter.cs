using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;

namespace uKindForge.SiteBuilder.Core.ValueConverter
{
	public class NumericPlusValueConverter : PropertyValueConverterBase
	{
		public override bool IsConverter(IPublishedPropertyType propertyType) => propertyType.EditorAlias.Equals("uKindForge.NumericPlus");

		public override Type GetPropertyValueType(IPublishedPropertyType propertyType) => typeof(int);

		public override PropertyCacheLevel GetPropertyCacheLevel(IPublishedPropertyType propertyType) => PropertyCacheLevel.None;

		public override object? ConvertSourceToIntermediate(IPublishedElement owner, IPublishedPropertyType propertyType,
			object? source, bool preview)
		{
			if (source == null) return string.Empty;

			var intermediate = source.ToString();
			return int.TryParse(intermediate, out int value) ? intermediate : 0;
		}
	}
}

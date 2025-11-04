using System.Drawing;
using System.Globalization;

namespace uKindForge.SiteBuilder.Core.Helpers
{
    public static class EnumHelper
    {
        public static IEnumerable<T> GetEnumValues<T>() where T : Enum
        {
            return Enum.GetValues(typeof(T)).Cast<T>();
        }
    }
}

namespace uKindForge.SiteBuilder.Core.Extensions
{
    public static class RandomExtensions
    {
        public static T PickOne<T>(this Random rand, params T[] items)
        {
            if (items == null || items.Length == 0)
                throw new ArgumentException("items is empty");

            int index = rand.Next(0, items.Length); // 0 .. length-1
            return items[index];
        }
    }
}
using GoCoSiteBuilder.Models;
using Umbraco.Cms.Core.Models.PublishedContent;

namespace GoCoSiteBuilder.Core.ViewModels
{
    public class ProductCategoryViewModel
    {
        public List<ProductCategory> Categories { get; set; } = [];
        public List<Product> Products { get; set; } = [];
        public int? ActiveCategoryId { get; set; }
        public string CategorySectionTitle { get; set; }
        public string EmptyCategoryMessage { get; set; }
        public IEnumerable<IPublishedContent> BreadcrumbNodes { get; set; } = [];
    }
}

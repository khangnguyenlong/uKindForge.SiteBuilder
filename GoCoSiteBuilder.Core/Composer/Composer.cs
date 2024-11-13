using GoCoSiteBuilder.Core.Helpers;
using GoCoSiteBuilder.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;

namespace GoCoSiteBuilder.Core.Composer
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services.AddScoped<IDesignService, DesignService>();
            builder.Services.AddScoped<DesignHelper>();
		}
    }
}

using uKindForge.SiteBuilder.Core.Components;
using uKindForge.SiteBuilder.Core.Helpers;
using uKindForge.SiteBuilder.Core.NotificationHandler;
using uKindForge.SiteBuilder.Core.Sections;
using uKindForge.SiteBuilder.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Sections;

namespace uKindForge.SiteBuilder.Core.Composer
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            // Services
            builder.Services.AddScoped<IDesignService, DesignService>();
            builder.Services.AddScoped<IPageService, PageService>();
            builder.Services.AddScoped<IEmailService, EmailService>();
            builder.Services.AddScoped<IContactFormService, ContactFormService>();
            builder.Services.AddScoped<DesignHelper>();

            // Sections 
            builder.Sections().InsertAfter<MediaSection, OperationsSection>();

            // Components
            builder.Components().Append<OperationsSectionComponent>();

            // Handler
            builder.AddNotificationHandler<UmbracoApplicationStartingNotification, RunCustomTableMigration>();
        }
    }
}

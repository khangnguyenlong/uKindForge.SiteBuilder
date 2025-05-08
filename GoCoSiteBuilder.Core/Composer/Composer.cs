using GoCoSiteBuilder.Core.Components;
using GoCoSiteBuilder.Core.Helpers;
using GoCoSiteBuilder.Core.NotificationHandler;
using GoCoSiteBuilder.Core.Sections;
using GoCoSiteBuilder.Core.Services;
using Microsoft.Extensions.DependencyInjection;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Sections;

namespace GoCoSiteBuilder.Core.Composer
{
    public class Composer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            // Services
            builder.Services.AddScoped<IDesignService, DesignService>();
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

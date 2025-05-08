using Umbraco.Cms.Core.Migrations;
using Umbraco.Cms.Core.Notifications;
using Umbraco.Cms.Core.Scoping;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core;
using Umbraco.Cms.Infrastructure.Migrations;
using Umbraco.Cms.Infrastructure.Migrations.Upgrade;
using Umbraco.Cms.Core.Events;
using GoCoSiteBuilder.Core.CustomTables.Migrations;

namespace GoCoSiteBuilder.Core.NotificationHandler
{
    public class RunCustomTableMigration(
        ICoreScopeProvider coreScopeProvider,
        IMigrationPlanExecutor migrationPlanExecutor,
        IKeyValueService keyValueService,
        IRuntimeState runtimeState) : INotificationHandler<UmbracoApplicationStartingNotification>
    {
        private readonly IMigrationPlanExecutor _migrationPlanExecutor = migrationPlanExecutor;
        private readonly ICoreScopeProvider _coreScopeProvider = coreScopeProvider;
        private readonly IKeyValueService _keyValueService = keyValueService;
        private readonly IRuntimeState _runtimeState = runtimeState;

        public void Handle(UmbracoApplicationStartingNotification notification)
        {
            if (_runtimeState.Level < RuntimeLevel.Run)
            {
                return;
            }

            var migrationPlan = new MigrationPlan("ContactForm");

            migrationPlan.From(string.Empty)
                .To<AddContactFormTable>("create-contact-form-table");

            var upgrader = new Upgrader(migrationPlan);
            upgrader.Execute(
                _migrationPlanExecutor,
                _coreScopeProvider,
                _keyValueService);
        }
    }
}

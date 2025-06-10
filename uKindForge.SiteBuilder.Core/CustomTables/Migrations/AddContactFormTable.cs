using uKindForge.SiteBuilder.Core.CustomTables.Tables;
using Microsoft.Extensions.Logging;
using Umbraco.Cms.Infrastructure.Migrations;

namespace uKindForge.SiteBuilder.Core.CustomTables.Migrations
{
    public class AddContactFormTable : MigrationBase
    {
        public AddContactFormTable(IMigrationContext context) : base(context)
        {
        }
        protected override void Migrate()
        {
            Logger.LogDebug("Running migration {MigrationStep}", "AddContactFormTable");

            if (TableExists("ContactForm") == false)
            {
                Create.Table<ContactFormTable>().Do();
            }
            else
            {
                Logger.LogDebug("The database table {DbTable} already exists, skipping", "ContactForm");
            }
        }
    }
}

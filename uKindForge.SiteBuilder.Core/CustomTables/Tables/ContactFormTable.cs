using NPoco;
using Umbraco.Cms.Infrastructure.Persistence.DatabaseAnnotations;

namespace uKindForge.SiteBuilder.Core.CustomTables.Tables
{
    [TableName("ContactForm")]
    [ExplicitColumns]
    public class ContactFormTable
    {
        [Column(Name = nameof(Id))]
        [PrimaryKeyColumn(AutoIncrement = true, IdentitySeed = 1)]
        public int Id { get; set; }

        [Column(Name = nameof(Name))]
        public required string Name { get; set; } = string.Empty;

        [Column(Name = nameof(Email))]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string Email { get; set; } = string.Empty;

        [Column(Name = nameof(Phone))]
        [NullSetting(NullSetting = NullSettings.Null)]
        public string Phone { get; set; } = string.Empty;

        [Column(Name = nameof(Message))]
        [SpecialDbType(SpecialDbTypes.NVARCHARMAX)]
        public required string Message { get; set; } = string.Empty;

        [Column(Name = nameof(IP))]
        public required string IP { get; set; } = string.Empty;

        [Column(Name = nameof(SubmittedAt))]
        public DateTime SubmittedAt { get; set; } = DateTime.UtcNow;
    }
}

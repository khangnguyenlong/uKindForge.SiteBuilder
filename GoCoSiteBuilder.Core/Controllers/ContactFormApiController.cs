using GoCoSiteBuilder.Core.CustomTables.Tables;
using GoCoSiteBuilder.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;
using Umbraco.Cms.Web.Common.Authorization;

namespace GoCoSiteBuilder.Core.Controllers
{
    [Authorize(Policy = AuthorizationPolicies.BackOfficeAccess)]
    public class ContactFormApiController : UmbracoAuthorizedApiController
    {
        private readonly IUmbracoDatabase _db;

        public ContactFormApiController(IUmbracoDatabaseFactory databaseFactory)
        {
            _db = databaseFactory.CreateDatabase();
        }

        [HttpGet]
        public async Task<IActionResult> GetContactForms(int page = 1, int pageSize = 10)
        {
            var offset = (page - 1) * pageSize;

            var items = await _db.FetchAsync<ContactFormTable>(
                $"SELECT * FROM ContactForm ORDER BY SubmittedAt DESC OFFSET @0 ROWS FETCH NEXT @1 ROWS ONLY",
                offset, pageSize
            );

            var total = await _db.ExecuteScalarAsync<int>("SELECT COUNT(*) FROM ContactForm");

            return Ok(new
            {
                items,
                total,
                page,
                pageSize
            });
        }

        [HttpPost]
        public async Task<IActionResult> DeleteMany([FromBody] List<int> ids)
        {
            await _db.DeleteManyAsync<ContactFormTable>()
                .Where(x => ids.Contains(x.Id))
                .Execute();

            return Ok();
        }

    }
}

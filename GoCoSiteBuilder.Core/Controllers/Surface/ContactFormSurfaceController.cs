using GoCoSiteBuilder.Core.CustomTables.Tables;
using GoCoSiteBuilder.Core.Services;
using GoCoSiteBuilder.Core.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Core.Cache;
using Umbraco.Cms.Core.Logging;
using Umbraco.Cms.Core.Routing;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Infrastructure.Persistence;
using Umbraco.Cms.Infrastructure.Scoping;
using Umbraco.Cms.Web.Website.Controllers;

namespace GoCoSiteBuilder.Core.Controllers.Surface
{
    public class ContactFormSurfaceController : SurfaceController
    {
        private readonly IScopeProvider _scopeProvider;
        private readonly IContactFormService _contactService;

        public ContactFormSurfaceController(
               IUmbracoContextAccessor umbracoContextAccessor,
               IUmbracoDatabaseFactory databaseFactory,
               ServiceContext services,
               AppCaches appCaches,
               IProfilingLogger profilingLogger,
               IPublishedUrlProvider publishedUrlProvider,
               IScopeProvider scopeProvider,
               IContactFormService contactService
           )
           : base(umbracoContextAccessor, databaseFactory, services, appCaches, profilingLogger, publishedUrlProvider)
        {
            _scopeProvider = scopeProvider;
            _contactService = contactService;
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> SubmitContactForm(ContactFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                TempData["Error"] = "Please fill in all required fields correctly.";
                return RedirectToCurrentUmbracoPage();
            }

            using (IScope scope = _scopeProvider.CreateScope())
            {
                var db = scope.Database;

                var submission = new ContactFormTable
                {
                    Name = model.Name,
                    Email = model.Email,
                    Phone = model.Phone,
                    Message = model.Message,
                    IP = HttpContext.Connection.RemoteIpAddress?.ToString() ?? "Unknown",
                };

                model.IPAddress = submission.IP;
                model.SubmittedAt = submission.SubmittedAt;

                db.Insert(submission);
                scope.Complete();
            }

            _ = _contactService.SendToClientAsync(model);
            _ = _contactService.SendToAdminAsync(model);

            TempData["Success"] = "Thank you for your message!";
            return RedirectToCurrentUmbracoPage();
        }
    }
}

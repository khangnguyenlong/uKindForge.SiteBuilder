using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;
using uKindForge.SiteBuilder.Core.Services;

namespace uKindForge.SiteBuilder.Core.Controllers
{
    [IsBackOffice]
    public class DesignController : UmbracoAuthorizedApiController
    {
        private readonly IDesignService _designService;

        public DesignController(IDesignService designService)
        {
            _designService = designService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCssStyle()
        {
            //TODO get by content id then check choose design if not get default from design list
            var designViewModel = await _designService.GenerateCssStyle("");
            return Ok(designViewModel);
        }
    }
}
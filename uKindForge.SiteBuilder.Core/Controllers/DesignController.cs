using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;
using uKindForge.SiteBuilder.Core.Services;

namespace uKindForge.SiteBuilder.Core.Controllers
{
    [IsBackOffice]
    public class DesignController(IDesignService designService) : UmbracoAuthorizedApiController
    {
        private readonly IDesignService _designService = designService;

        [HttpGet]
        public async Task<IActionResult> GetCssStyle([FromQuery] int contentId)
        {
            var designViewModel = await _designService.GenerateCssStyle(contentId);
            return Ok(designViewModel);
        }
    }
}
using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.BackOffice.Controllers;
using Umbraco.Cms.Web.Common.Attributes;
using uKindForge.SiteBuilder.Core.Services;
using uKindForge.SiteBuilder.Core.Models;

namespace uKindForge.SiteBuilder.Core.Controllers
{
    [IsBackOffice]
    public class DesignController(IDesignService designService,
        IColorService colorService
    ) : UmbracoAuthorizedApiController
    {
        private readonly IDesignService _designService = designService;
        private readonly IColorService _colorService = colorService;

        [HttpGet]
        public async Task<IActionResult> GetCssStyle([FromQuery] int contentId)
        {
            var designViewModel = await _designService.GenerateCssStyle(contentId);
            return Ok(designViewModel);
        }

        [HttpPost]
        public async Task<IActionResult> GenerateColors(ColorRequestModel request)
        {
            var colors = await _colorService.GenerateColorsAsync(request);
            return Ok(colors);
        } 
    }
}
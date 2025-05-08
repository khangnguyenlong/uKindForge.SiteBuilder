using Microsoft.Extensions.Logging;
using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.Services;

namespace GoCoSiteBuilder.Core.Components
{
    public class OperationsSectionComponent : IComponent
    {
        private readonly IUserService _userService;
        private readonly ILogger<OperationsSectionComponent> _logger;

        public OperationsSectionComponent(IUserService userService, ILogger<OperationsSectionComponent> logger)
        {
            _userService = userService;
            _logger = logger;
        }

        public void Initialize()
        {
            var adminGroup = _userService.GetUserGroupByAlias("admin");

            if (adminGroup != null && !adminGroup.AllowedSections.Contains("operations"))
            {
                adminGroup.AddAllowedSection("operations");

                _userService.Save(adminGroup);

                _logger.LogInformation("Added 'operations' section to admin user group.");
            }
        }

        public void Terminate() { }
    }
}

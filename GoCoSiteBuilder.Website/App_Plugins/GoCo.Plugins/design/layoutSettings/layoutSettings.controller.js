angular.module("umbraco").controller("GoCo.LayoutSettingsController", layoutSettingsController);

function layoutSettingsController($scope, $http, assetsService) {
    if (!$scope.model.value) {
        $scope.model.value = {
            headerDesktop: {},
            headerMobile: {},
            image: {},
            general: {},
        }
    }

    $scope.toggle = function (propertyPath) {
        var pathParts = propertyPath.split('.');
        var currentValue = $scope.model.value;

        for (var i = 0; i < pathParts.length - 1; i++) {
            currentValue = currentValue[pathParts[i]];
        }

        var finalProperty = pathParts[pathParts.length - 1];
        currentValue[finalProperty] = !currentValue[finalProperty];
    };

}

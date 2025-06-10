angular.module("umbraco").controller("uKindForge.NumericPlusController", numericPlusController);

function numericPlusController($scope) {    
    if (!$scope.model.value) {
        $scope.model.value = $scope.model.config.default;
    }
}
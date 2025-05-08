angular.module("umbraco").controller("GoCo.NumericPlusController", numericPlusController);

function numericPlusController($scope) {    
    if (!$scope.model.value) {
        $scope.model.value = $scope.model.config.default;
    }
}
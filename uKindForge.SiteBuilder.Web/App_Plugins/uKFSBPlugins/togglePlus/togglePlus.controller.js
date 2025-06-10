angular.module("umbraco").controller("uKindForge.TogglePlusController", numericPlusController);

function numericPlusController($scope, $rootScope, assetsService) {

    function handleToggle()
    {
        setupViewModel();
        showHideFields();
    }

    handleToggle();

    if ($scope.model && !$scope.model.value) {
        $scope.model.value = ($scope.renderModel.value === true) ? '1' : '0';
    }

    //here we declare a special method which will be called whenever the value has changed from the server
    //this is instead of doing a watch on the model.value = faster
    $scope.model.onValueChanged = function (newVal, oldVal) {
        //update the display val again if it has changed from the server
        handleToggle();
    };

    // Update the value when the toggle is clicked
    $scope.toggle = function () {
        if ($scope.renderModel.value) {
            $scope.model.value = "0";
            handleToggle();
            return;
        }

        $scope.model.value = "1";
        handleToggle();
    };

    function setupViewModel() {
        $scope.renderModel = {
            value: false
        };

        if ($scope.model.config && $scope.model.config.default && $scope.model.config.default.toString() === "1" && $scope.model && !$scope.model.value) {
            $scope.renderModel.value = true;
        }

        if ($scope.model && $scope.model.value && ($scope.model.value.toString() === "1" || $scope.model.value.toLowerCase() === "true")) {
            $scope.renderModel.value = true;
        }
    }

    function showHideFields() {
        var propertesAlias = $scope.model.config.hideFields.split(",");
        angular.forEach(propertesAlias, function (propertyAlias, key) {
            var propertyHtmlControls = $("div[class*='umb-property']:has(ng-form)");

            angular.forEach(propertyHtmlControls, function (propertyHtml, key) {
                if ($(propertyHtml).find(".control-label").attr("for") == propertyAlias) {
                    if ($scope.renderModel.value) {
                        $(propertyHtml).show();
                    } else {
                        $(propertyHtml).hide();
                    }
                }
            });
        });
    }
}
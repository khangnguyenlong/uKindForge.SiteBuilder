angular.module("umbraco").controller("uKindForge.RadioButtonPlusController",

    function ($scope, $q, $timeout, assetsService, $sce) {

        $scope.isLoaded = false;

        $scope.model.config.items.items = $scope.model.config.items.items.filter(function (item) {
            return item.key !== "" && item.text !== "";
        });

        $scope.items = $scope.model.config.items.items;
        $scope.isShowButtonText = !$scope.model.config.isDisableButtonText || $scope.model.config.isDisableButtonText.toString() === "0";
        const isAllowToggle = !$scope.model.config.isDisableToggle || $scope.model.config.isDisableToggle.toString() === "0";
        if (!$scope.model.value && $scope.model.config.items.selectedDefault) {
            $scope.model.value = $scope.model.config.items.selectedDefault;
        }

        $scope.items.forEach(function (value, key) {
            value.svgTrusted = $sce.trustAsHtml(value.svg);
        });

        $scope.isLoaded = true;
        $timeout(function () {
            handleShowHideProperties();
        }, 0);

        $scope.model.current = $scope.model.value;

        $scope.check = function (event) {
            if (isAllowToggle && $scope.model.current === event.target.value) {
                $scope.model.value = "";
                $scope.model.current = "";
            }
            else {
                $scope.model.value = event.target.value;
                $scope.model.current = event.target.value;
            }

            handleShowHideProperties();
        };

        function handleShowHideProperties() {
            if ($scope.model.value === "") {
                showHideProperties($scope.items[0], '-');
                return;
            }

            const itemValue = $scope.items.find(m => m.key == $scope.model.value);
            showHideProperties(itemValue);
        }

        function showHideProperties(itemValue, action = '') {
            if (!itemValue || !itemValue.properties) return;

            const propertiesAlias = itemValue.properties.split(",");

            propertiesAlias.forEach(propertyValue => {
                const propertyAlias = propertyValue.substring(1);
                const actionToPerform = action || propertyValue.charAt(0);
                const propertyHtmlControls = $("div[class*='umb-property']:has(ng-form)");

                propertyHtmlControls.each((index, propertyHtml) => {
                    const controlLabel = $(propertyHtml).find(".control-label").attr("for");

                    if (controlLabel === propertyAlias) {
                        if (actionToPerform === '+') {
                            $(propertyHtml).show();
                        } else if (actionToPerform === '-') {
                            $(propertyHtml).hide();
                        }
                    }
                });
            });
        }

    });

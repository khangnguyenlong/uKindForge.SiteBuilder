angular.module("umbraco")
    .controller("GoCo.RadioButtonPlusPrevalueController",
        function ($scope, $timeout, assetsService, $sce) {

            if (!$scope.model.value || Object.keys($scope.model.value).length == 0) {
                $scope.model.value = {
                    items: [],
                    selectedDefault: ""
                };
            }
            else {
                angular.forEach($scope.model.value.items, function (value, key) {

                    value.svgTrusted = $sce.trustAsHtml(value.svg);

                });
            }

            $scope.addItem = function () {
                $scope.model.value.items.push({
                    svg: "",
                    svgTrusted: "",
                    text: "",
                    key: "",
                    properties: ""
                });
            }

            $scope.removeItem = function (index) {
                $scope.model.value.items.splice(index, 1);
            }

            $scope.toggleSelectedDefault = function (event) {
                if ($scope.model.value.selectedDefault == event.target.value) {
                    $scope.model.value.selectedDefault = "";
                }
            };

            $scope.sortableOptions = {
                axis: 'y',
                cursor: "move",
                handle: ".sortHandle",
                start: function (event, ui) {
                    var curTH = ui.helper.closest("table").find("thead").find("tr");
                    var itemTds = ui.item.children("td");
                    curTH.find("th").each(function (ind, obj) {
                        itemTds.eq(ind).width($(obj).width());
                    });
                },
                update: function (ev, ui) {
                }
            };
        });
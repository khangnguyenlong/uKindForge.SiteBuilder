angular.module("umbraco")
.directive('colorDropdown', function ($document) {
    return {
        restrict: 'E',
        scope: {
            colors: '<',     // [{ color, name, tokenKey }, ...]
            ngModel: '='
        },
        template: `
        <div class="color-dropdown" ng-class="{ 'open': $ctrl.isOpen }">
            <div class="dropdown-btn"
                 ng-click="$ctrl.toggleDropdown($event)">

                <div class="color-box"
                     ng-style="{ 'background-color': ($ctrl.selectedColor && $ctrl.selectedColor.color) || 'transparent' }">
                </div>
            </div>

            <div class="dropdown-content"
                 ng-style="{ display: $ctrl.isOpen ? 'block' : 'none' }">

                <div class="dropdown-option"
                     ng-repeat="c in $ctrl.colors"
                     ng-click="$ctrl.chooseColor(c)">

                    <div class="color-box"
                         ng-style="{ 'background-color': c.color }">
                    </div>

                    <span>{{c.name}}</span>
                </div>
            </div>
        </div>
        `,
        bindToController: true,
        controllerAs: '$ctrl',
        controller: function ($scope, $element) {
            var $ctrl = this;
            $ctrl.isOpen = false;
            $ctrl.selectedColor = null;

            $ctrl.syncSelectedFromModel = function () {
                if (!$ctrl.colors || !$ctrl.ngModel) {
                    $ctrl.selectedColor = null;
                    return;
                }

                var match = $ctrl.colors.find(function (c) {
                    return c.tokenKey === $ctrl.ngModel;
                });

                $ctrl.selectedColor = match || null;
            };

            $ctrl.$onInit = function () {
                $ctrl.syncSelectedFromModel();
            };

            $scope.$watch('$ctrl.ngModel', function () {
                $ctrl.syncSelectedFromModel();
            });
            $scope.$watchCollection('$ctrl.colors', function () {
                $ctrl.syncSelectedFromModel();
            });

            $ctrl.toggleDropdown = function ($event) {
                $event.stopPropagation();
                $ctrl.isOpen = !$ctrl.isOpen;
            };

            $ctrl.chooseColor = function (colorItem) {
                $ctrl.selectedColor = colorItem;

                $ctrl.ngModel = colorItem.tokenKey;

                $ctrl.isOpen = false;
            };

            var onClickOutside = function (evt) {
                if (!$element[0].contains(evt.target)) {
                    if ($ctrl.isOpen) {
                        $scope.$apply(function () {
                            $ctrl.isOpen = false;
                        });
                    }
                }
            };

            var offDocClick = $document.on('click', onClickOutside);

            $scope.$on('$destroy', function () {
                $document.off('click', onClickOutside);
            });
        }
    };
});

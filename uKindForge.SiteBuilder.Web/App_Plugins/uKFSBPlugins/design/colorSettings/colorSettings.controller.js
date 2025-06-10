angular.module("umbraco").controller("uKindForge.ColorSettingsController", colorSettingsController);
function colorSettingsController($scope, $timeout, $element, designService, editorState) {

    if (!$scope.model.value) {
        $scope.model.value = createDefaultColor();
    }

    const colorPaletteProperty = designService.getProperty("colors", "settings", "colorPalette", editorState.getCurrent());
    let colorPaletteValue = getColorPalatteValue(colorPaletteProperty);

    $scope.settings = {
        palette: colorPaletteValue,
        showPalette: true,
        showPaletteOnly: true,
        showInput: false,
        allowEmpty: false
    };

    function createDefaultColor() {
        return {
            contents: [
                {
                    id: String.CreateGuid()
                }
            ],
            buttons: [
                {
                    id: String.CreateGuid()
                }
            ]
        };
    }

    $scope.onChange = function (color, propertyGroup, propertyKey) {
        if (color && typeof color.toHexString === 'function') {
            const formattedColor = color.toHexString().trimStart("#");

            if (propertyGroup && propertyGroup.id) {
                propertyGroup[propertyKey] = formattedColor; 
            } else if ($scope.model.value[propertyGroup]) { 
                $scope.model.value[propertyGroup][propertyKey] = formattedColor;
            } else {
                $scope.model.value[propertyGroup] = { [propertyKey]: formattedColor };
            }
        } else {
            console.warn("Invalid color provided:", color);
        }
    };

    function getColorPalatteValue(colorPaletteProperty, chunkSize = 3) {
        let value = [];
        if (!colorPaletteProperty.value || colorPaletteProperty.value.length <= 0) {
            value.push({ label: "000000", value: "000000" });
            return value;
        }

        for (let i = 0; i < colorPaletteProperty.value.length; i += chunkSize) {
            const colorPaletteChunkValue = colorPaletteProperty.value.slice(i, i + chunkSize);
            value.push(colorPaletteChunkValue.map(c => c.value));
        }

        return value;
    }

    $scope.$watch(
        function () {
            if (!colorPaletteProperty) return;
            return colorPaletteProperty.value;
        },
        function (newValue, oldValue) {
            if (newValue !== oldValue) {
                colorPaletteValue = getColorPalatteValue(colorPaletteProperty);
                $timeout(updateBaselineColors, 100);
            }
        },
        true
    );

    function updateBaselineColors() {
        const colorPickerControls = $element.find('.umb-color-picker input');

        // Check if Spectrum is available
        if (typeof $.fn.spectrum !== "function") {
            console.error("Spectrum plugin is not loaded!");
            return;
        }

        colorPickerControls.each(function () {
            $(this).spectrum("option", "palette", colorPaletteValue);
        });
    }


    $scope.addItem = function (property) {
        const item = {
            id: String.CreateGuid()
        };
        $scope.model.value[property].push(item);
    }
    $scope.deleteItem = function (property, value) {
        const index = $scope.model.value[property].indexOf(value);
        if (index > -1) {
            $scope.model.value[property].splice(index, 1);
        }
    };

    $scope.contentSortableOptions = {
        axis: 'y',
        containment: '.content-sortable-wrap',
        items: '> div.card',
        tolerance: 'intersect',
        handle: ".card-header",
        cursor: 'grabbing'
    };
    $scope.buttonSortableOptions = {
        axis: 'y',
        containment: '.button-sortable-wrap',
        items: '> div.card',
        tolerance: 'intersect',
        handle: ".card-header",
        cursor: 'grabbing'
    };

    $scope.tabs = [
        { title: "Overview", content: "This is the overview tab content." },
        { title: "Specifications", content: "This is the specifications tab content." },
        { title: "Reviews", content: "This is the reviews tab content." }
    ];
    $scope.activeTab = 0;

    $scope.setActiveTab = function (index) {
        $scope.activeTab = index;
    };
}

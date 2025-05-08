angular.module('umbraco').controller('GoCo.BaselineColorPickerController', function ($scope, $timeout, $element, designService, editorState) {
    const value = "000000";

    if (!$scope.model.value) {
        $scope.model.value = value;
    }

    $scope.onChange = function (color) {
        $scope.model.value = color.toHexString().trimStart("#");
    };

    let colorPaletteProperty = {};
    let colorPaletteValue = [];

    designService.getCurrentDesignDetail().then(function (content) {
        colorPaletteProperty = designService.getProperty("colors", "settings", "colorPalette", content);
        if (!colorPaletteProperty) return;

        colorPaletteValue = getColorPalatteValue(colorPaletteProperty);

    });

    function getColorPalatteValue(colorPaletteProperty, chunkSize = 3) {
        let value = [];

        if (!colorPaletteProperty || !colorPaletteProperty.value) return value;

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
                $timeout(updateBaselineColors, 10);
            }
        },
        true
    );

    function updateBaselineColors() {
        const colorPickerControls = $element.find('.umb-color-picker input');
        colorPickerControls.each(function () {
            $(this).spectrum("option", "palette", colorPaletteValue);
        });
    }


    $scope.settings = {
        palette: colorPaletteValue,
        showPalette: true,
        showPaletteOnly: true,
        showInput: false,
        allowEmpty: false
    };
});
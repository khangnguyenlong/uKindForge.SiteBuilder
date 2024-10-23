angular.module("umbraco").controller("GoCo.ButtonColorController", customBlockPreviewController);
function customBlockPreviewController($scope, designService, editorState) {
    $scope.model.items = [];

    designService.getCurrentDesignDetail().then(function (content) {
        const buttonColorsProperty = designService.getProperty("colors", "settings", "buttonColors", content);
        if (!buttonColorsProperty.value || !buttonColorsProperty.value.contentData) return;

        let buttons = [];

        const buttonColors = buttonColorsProperty.value.contentData;
        for (var i = 0; i < buttonColors.length; i++) {
            var button = buttonColors[i];
            buttons.push({
                bgBtnColor: button.bgBtnColor,
                borderBtnColor: button.borderBtnColor,
                textBtnColor: button.textBtnColor,
                order: `${i}`
            });
        }
        var index = buttons.findIndex(x => x.order === $scope.model.value);
        if (index === -1 && buttons.length > 0) {
            $scope.model.value = buttons[0].order;
        }
        $scope.model.items = buttons;
    });
}
angular.module("umbraco").controller("GoCo.ButtonColorController", buttonColorController);
function buttonColorController($scope, designService, editorState) {
    $scope.model.items = [];

    designService.getCurrentDesignDetail().then(function (content) {
        const buttonColorsProperty = designService.getProperty("colors", "settings", "colorSettings", content);
        if (!buttonColorsProperty.value || !buttonColorsProperty.value.buttons) return;

        let buttons = [];

        const buttonColors = buttonColorsProperty.value.buttons;
        for (var i = 0; i < buttonColors.length; i++) {
            var button = buttonColors[i];
            buttons.push({
                bgBtnColor: button.background,
                borderBtnColor: button.border,
                textBtnColor: button.text,
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
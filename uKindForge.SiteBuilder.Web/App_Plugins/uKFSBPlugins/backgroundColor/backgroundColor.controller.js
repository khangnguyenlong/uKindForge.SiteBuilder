angular.module("umbraco").controller("uKindForge.BackgroundColorController", customBlockPreviewController);
function customBlockPreviewController($scope, designService, editorState) {
    $scope.model.items = [];

    designService.getCurrentDesignDetail().then(function (content) {
        const contentBgColorsProperty = designService.getProperty("colors", "settings", "colorSettings", content);
        if (!contentBgColorsProperty.value || !contentBgColorsProperty.value.contents) return;

        let contents = [];

        const contentBgColors = contentBgColorsProperty.value.contents;
        for (var i = 0; i < contentBgColors.length; i++) {
            var content = contentBgColors[i];
            contents.push({
                headingColor: content.heading,
                textColor: content.text,
                backgroundColor: content.background,
                order: `${i}`
            });
        }
        var index = contents.findIndex(x => x.order === $scope.model.value);
        if (index === -1 && contents.length > 0) {
            //$scope.$applyAsync(function () {
                $scope.model.value = contents[0].order;
        }
        $scope.model.items = contents;
    });
}
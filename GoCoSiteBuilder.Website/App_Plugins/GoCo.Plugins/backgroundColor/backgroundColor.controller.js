angular.module("umbraco").controller("GoCo.BackgroundColorController", customBlockPreviewController);
function customBlockPreviewController($scope, designService, editorState) {
    $scope.model.items = [];

    designService.getCurrentDesignDetail().then(function (content) {
        const contentBgColorsProperty = designService.getProperty("colors", "settings", "contentColors", content);
        if (!contentBgColorsProperty.value || !contentBgColorsProperty.value.contentData) return;

        let contents = [];

        const contentBgColors = contentBgColorsProperty.value.contentData;
        for (var i = 0; i < contentBgColors.length; i++) {
            var content = contentBgColors[i];
            contents.push({
                headingColor: content.headingColor,
                textColor: content.textColor,
                backgroundColor: content.backgroundColor,
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
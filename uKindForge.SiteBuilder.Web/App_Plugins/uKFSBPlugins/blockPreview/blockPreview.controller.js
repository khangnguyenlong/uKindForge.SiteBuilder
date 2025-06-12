angular.module("umbraco").controller("uKindForge.BlockPreviewController", customBlockPreviewController);
function customBlockPreviewController($scope, $http, $sce, designService, editorState) {
    var vm = this;
    vm.designMarkup = '';

    async function getDesignCssStyle() {
        const contentId = editorState.getCurrent().id;

        const data = await designService.getDesignCssStyle(contentId);

        if (data && data.CssStyle) {
            vm.designMarkup = $sce.trustAsHtml(data.CssStyle);
        }
    }

    getDesignCssStyle();
}
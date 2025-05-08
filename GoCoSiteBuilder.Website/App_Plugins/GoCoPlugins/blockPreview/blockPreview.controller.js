angular.module("umbraco").controller("GoCo.BlockPreviewController", customBlockPreviewController);
function customBlockPreviewController($scope, $http, $sce, designService) {
    var vm = this;
    vm.designMarkup = '';

    async function getDesignCssStyle() {
        const data = await designService.getDesignCssStyle();

        if (data && data.CssStyle) {
            vm.designMarkup = $sce.trustAsHtml(data.CssStyle);
        }
    }

    getDesignCssStyle();
}
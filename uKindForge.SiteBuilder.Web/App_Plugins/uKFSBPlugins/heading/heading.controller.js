angular.module("umbraco").controller("uKindForge.HeadingController", headingController);
function headingController($scope, editorService) {
    $scope.headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if (!$scope.model.value || Object.keys($scope.model.value).length == 0)
    {
        $scope.model.value = {
            headingText: "",
            headingTag: $scope.model.config.defaultHeadingTag || "h1",
            align: "",
            //bold: false,
            link: {}
        };
    }


    if ($scope.model.config.hideAlignControl === '1') {
        $scope.model.value.align = "";
    }

    if ($scope.model.config.hideUrlPickerControl === '1') {
        $scope.model.value.link = {};
    }

    $scope.openLinkPicker = function () {
        const linkPickerOptions = {
            multiPicker: false,
            currentTarget: $scope.model.value.link,
            submit: function (linkPickerModel) { 
                const selectedLink = linkPickerModel.target;
                $scope.model.value.link = selectedLink;
                editorService.close();
            },
            close: function () {
                editorService.close();
            }
        };

        editorService.linkPicker(linkPickerOptions);
    };

    $scope.removeLinkPicker = function () {
        $scope.model.value.link = {};
    }
}
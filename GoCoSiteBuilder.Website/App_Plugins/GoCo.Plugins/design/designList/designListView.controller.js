angular.module("umbraco").controller("designListViewController", function ($scope, listViewHelper, notificationsService, contentResource, editorState, $filter, designService) {
    async function getDesignItems() {
        $scope.designItems = [];

        let children = await contentResource.getChildren(editorState.getCurrent().id);
        $scope.designItems = children.items;
        $scope.chooseDesign = designService.getProperty('generic', 'content', 'chooseDesign', editorState.getCurrent()).value;

    }

    $scope.clickItem = function (item, $event, $index) {
        var selectedItem = $filter('filter')($scope.items, { id: item.id }, true)[0];
        if (selectedItem) {
            listViewHelper.editItem(selectedItem, $scope);
        }
    }

    $scope.setAsDefault = async function ($event, item) {
        try {
            $event.stopPropagation();

            let content = await contentResource.getById(editorState.getCurrent().id);
            content.variants[0].save = true;
            designService.getProperty('generic', 'content', 'chooseDesign', content).value = item.udi;

            await contentResource.publish(content, false, [], false);
            $scope.chooseDesign = item.udi;
            designService.getProperty('generic', 'content', 'chooseDesign', editorState.getCurrent()).value = item.udi;

            if (item.state !== "Published") {
                await publishItem(item, contentResource);
            }

            notificationsService.success("Success", `Default design "${item.name}" has been set successfully!`);
        } catch (error) {
            console.error("Error setting default design:", error);
            notificationsService.error("Error", "An error occurred while setting the default design.");
        }
    };

    async function publishItem(item, contentResource) {
        let selectedItemContent = await contentResource.getById(item.id);
        selectedItemContent.variants[0].save = true;
        await contentResource.publish(selectedItemContent, false, [], false);
        item.state = "Published";
        item.published = true;
    }

    getDesignItems();
});
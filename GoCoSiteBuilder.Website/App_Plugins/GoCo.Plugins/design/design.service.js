angular.module("umbraco").factory("designService", function ($http, contentResource, entityResource) {

    function getProperty(tabAlias, groupAlias, propertyAlias, editorStateCurrent) {
        if (!editorStateCurrent.variants || !editorStateCurrent.variants[0]) return;

        const groupTab = editorStateCurrent.variants[0].tabs.find(tab => tab.type === 'Group' && tab.alias === `${tabAlias}/${groupAlias}`);
        if (!groupTab) return;

        const property = groupTab.properties.find(property => property.alias === propertyAlias);
        return property;
    }

    function getCurrentDesignDetail() {
        return getDefaultDesignDetail();
    }

    async function getDefaultDesignDetail() {
        try {
            const rootNodes = await contentResource.getChildren(-1);

            const designListNode = rootNodes.items.find(node => node.contentTypeAlias === "designList");
            if (!designListNode) return;

            const chooseDesign = designListNode.properties.find(p => p.alias === 'chooseDesign');
            if (!chooseDesign) return;

            const entity = await entityResource.getById(chooseDesign.value, "Document");
            const content = await contentResource.getById(entity.id);
            return content;

        } catch (error) {
            console.error("Error getting default design detail:", error);
            return null;
        }
    }

    async function getDesignCssStyle() {
        return $http.get("backoffice/api/design/GetCssStyle")
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.error("Error fetching design content:", error);
                return null;
            });
    }


    return {
        getProperty: getProperty,
        getCurrentDesignDetail: getCurrentDesignDetail,
        getDesignCssStyle: getDesignCssStyle
    };
});

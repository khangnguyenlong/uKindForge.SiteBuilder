angular.module("umbraco").factory("designService", function ($http, contentResource, entityResource) {

    function getProperty(tabAlias, groupAlias, propertyAlias, editorStateCurrent) {
        if (!editorStateCurrent || !editorStateCurrent.variants || !editorStateCurrent.variants[0]) return;

        const groupTab = editorStateCurrent.variants[0].tabs.find(tab => tab.type === 'Group' && tab.alias === `${tabAlias}/${groupAlias}`);
        if (!groupTab) return;
        const property = groupTab.properties.find(property => property.alias === propertyAlias);
        return property;
    }

    async function getCurrentDesignDetail(currentNode) {
        if (!currentNode || typeof currentNode.parentId === 'undefined') {
            return null;
        }

        // find homepage
        let homepageNode = await findNearestHomepage(currentNode);
        if (!homepageNode) return null;

        const variant = homepageNode.variants?.[0];
        if (!variant || !variant.tabs) return null;

        // find design
        const designTab = variant.tabs.find(tab => tab.alias === 'design/design');
        if (!designTab || !designTab.properties) return null;

        const overrideDesignProp = designTab.properties.find(prop => prop.alias === 'overrideDesign');
        if (!overrideDesignProp || !overrideDesignProp.value) return null;

        const udi = overrideDesignProp.value;
        const entity = await entityResource.getById(udi, "Document");
        const content = await contentResource.getById(entity.id);

        return content;
    }

    async function getDesign(contentId) {
        return $http.get("backoffice/api/design/GetDesign", {
            params: { contentId: contentId }
        })
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.error("Error fetching design content:", error);
                return null;
            });
    }

    async function getDesignCssStyle(contentId) {
        return $http.get("backoffice/api/design/GetCssStyle", {
            params: { contentId: contentId }
        })
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.error("Error fetching design content:", error);
                return null;
            });
    }

    async function generateColors(params) {
        return $http.post("backoffice/api/design/GenerateColors", params)
            .then(function (response) {
                return response.data;
            }, function (error) {
                console.error("Error fetching design content:", error);
                return null;
            });
    }

    async function findNearestHomepage(node) {
        while (node) {
            if (node.contentTypeAlias === "homePage") {
                return node;
            }

            if (!node.parentId || node.parentId === -1) break;

            try {
                node = await contentResource.getById(node.parentId);
            } catch (e) {
                console.warn("Cannot find parent node:", e);
                break;
            }
        }

        return null;
    }


    return {
        getProperty: getProperty,
        getCurrentDesignDetail: getCurrentDesignDetail,
        getDesignCssStyle: getDesignCssStyle,
        getDesign: getDesign,
        generateColors: generateColors
    };
});

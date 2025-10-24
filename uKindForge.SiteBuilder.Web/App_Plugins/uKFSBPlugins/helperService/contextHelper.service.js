angular.module("umbraco").factory("contextHelperService", function ($injector, editorState) {
    function isInContentSection() {
        try {
            const current = editorState.getCurrent();

            const isElement = current?.isElement === true;
            if (current?.contentTypeAlias && !isElement) {
                return true;
            }

            const $location = $injector.has('$location') ? $injector.get('$location') : null;
            const path = $location?.path() || "";

            if (path.startsWith("/content")) return true;

        } catch (e) {
            console.warn("contextHelperService: Error", e);
        }

        return false;
    }

    return {
        isInContentSection
    };
});

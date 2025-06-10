angular.module("umbraco").controller("uKindForge.fontBaselinesController", fontBaselinesController);

function fontBaselinesController($scope, $http, assetsService) {
    if (!$scope.model.value) {
        $scope.model.value = {
            fontBaselines: [],
            typographies: createDefaultTypographies()
        };
    }

    function createDefaultTypographies() {
        return [
            { key: "Text", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H1", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H2", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H3", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H4", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H5", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" },
            { key: "H6", fontId: "", fontSizeDesktop: "16", fontSizeTablet: "16", fontSizeMobile: "16" }
        ];
    }

    $scope.tempVariants = {};

    $scope.updateVariants = function (font) {
        if (!$scope.sourceFonts) {
            console.error("sourceFonts is not defined or empty");
            return;
        }

        const fontData = $scope.sourceFonts.find(f => f.family === font.fontFamily);
        if (fontData) {
            const variants = fontData.variants.map(v => (v === "regular" ? "400" : v === "italic" ? "400italic" : v));
            const styles = Array.from(new Set(variants.map(v => (v.includes('italic') ? 'italic' : 'normal'))));
            const weights = Array.from(new Set(variants.filter(v => !isNaN(v)))).sort((a, b) => a - b);

            font.fontCategory = fontData.category;
            font.fontStyle = font.fontStyle || "normal";
            font.fontWeight = font.fontWeight || "400";

            $scope.tempVariants[font.id] = { styles, weights };
            $scope.loadGoogleFont(font.fontFamily, font.fontStyle, font.fontWeight);
        } else {
            console.error("Font family not found: ", font.fontFamily);
        }
    };

    $http.get("/App_Plugins/uKFSBPlugins/design/fontSettings/google-web-font-list.json").then(function (response) {
        $scope.sourceFonts = response.data.items;
        if (!$scope.model.value.fontBaselines || $scope.model.value.fontBaselines.length === 0) {
            $scope.model.value.fontBaselines.push(addNewFont());
        } else {
            $scope.model.value.fontBaselines.forEach(font => $scope.updateVariants(font));
        }
        $scope.initializeTypographies();
    });

    $scope.loadGoogleFont = function (fontFamily, fontStyle, fontWeight) {
        if (!fontFamily) return;
        const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(fontFamily)}:wght@${fontWeight}${fontStyle === 'italic' ? ';ital,wght@1,' + fontWeight : ''}`;
        assetsService.loadCss(fontUrl);
    };

    $scope.initializeTypographies = function () {
        if (!$scope.model.value.typographies || $scope.model.value.typographies.length === 0) {
            $scope.model.value.typographies = createDefaultTypographies();
        }
        $scope.model.value.typographies.forEach(typography => {
            if (!typography.fontId) {
                typography.fontId = $scope.model.value.fontBaselines[0]?.id || null;
            }
            $scope.updateTypographyFont(typography);
        });
    };

    function addNewFont() {
        const newFont = {
            id: String.CreateGuid(),
            fontFamily: "Inter",
            fontCategory: "sans-serif",
            fontStyle: "normal",
            fontWeight: "400"
        };
        $scope.updateVariants(newFont);
        return newFont;
    }

    $scope.deleteFont = function (font) {
        const index = $scope.model.value.fontBaselines.indexOf(font);
        if (index > -1) {
            $scope.model.value.fontBaselines.splice(index, 1);
            delete $scope.tempVariants[font.id];
            $scope.model.value.typographies.forEach(typography => {
                if (typography.fontId === font.id) {
                    typography.fontId = $scope.model.value.fontBaselines[0]?.id || null;
                    $scope.updateTypographyFont(typography);
                }
            });
        } else {
            console.error("Font not found: ", font);
        }
    };

    $scope.addFont = function () {
        const newFont = addNewFont();
        $scope.model.value.fontBaselines.push(newFont);
        $scope.updateVariants(newFont);
    };

    $scope.getFontStyle = function (fontId, fontSize = "16") {
        const font = $scope.model.value.fontBaselines.find(f => f.id === fontId);
        if (!font) return {};

        return {
            'font-family': `${font.fontFamily}, ${font.fontCategory}`,
            'font-weight': font.fontWeight,
            'font-style': font.fontStyle,
            'font-size': `${fontSize}px`
        };
    };

    $scope.getFontInfo = function (fontId) {
        const font = $scope.model.value.fontBaselines.find(f => f.id === fontId);
        return font ? `${font.fontFamily}, ${font.fontCategory} - ${font.fontStyle} - ${font.fontWeight}` : '';
    };

    $scope.sortableOptions = {
        axis: 'y',
        containment: '.accordion-body',
        items: '> div.card',
        tolerance: 'intersect',
        handle: ".card-header",
        cursor: 'grabbing'
    };

    $scope.updateTypographyFont = function (typography) {
        const selectedFont = $scope.model.value.fontBaselines.find(font => font.id === typography.fontId);
        if (selectedFont) {
            typography.fontId = selectedFont.id;
        }
    };

    if ($scope.model.value.fontBaselines) {
        $scope.model.value.fontBaselines.forEach(font => $scope.updateVariants(font));
    }
}

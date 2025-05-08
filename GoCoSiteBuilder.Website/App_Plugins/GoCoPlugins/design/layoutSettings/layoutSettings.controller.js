angular.module("umbraco").controller("GoCo.LayoutSettingsController", layoutSettingsController);

function layoutSettingsController($scope, $http, assetsService) {

    if (!$scope.model.value) {
        $scope.model.value = {
            headerDesktop: {
                styleValue: "style1"
            },
            headerMobile: {
                styleValue: "style1"
            },
            image: {},
            general: {},
            video: {},
            button: {},
            link: {},
            card: {}
        }
    }

    $scope.toggle = function (propertyPath) {
        var pathParts = propertyPath.split('.');
        var currentValue = $scope.model.value;

        for (var i = 0; i < pathParts.length - 1; i++) {
            currentValue = currentValue[pathParts[i]];
        }

        var finalProperty = pathParts[pathParts.length - 1];
        currentValue[finalProperty] = !currentValue[finalProperty];
    };

    $scope.onChange = function (color, propertyGroup, propertyKey) {
        if (color && typeof color.toHexString === 'function') {
            const formattedColor = color.toHexString().trimStart("#");

            if (propertyGroup && propertyGroup.id) {
                propertyGroup[propertyKey] = formattedColor;
            } else if ($scope.model.value[propertyGroup]) {
                $scope.model.value[propertyGroup][propertyKey] = formattedColor;
            } else {
                $scope.model.value[propertyGroup] = { [propertyKey]: formattedColor };
            }
        } else {
            console.warn("Invalid color provided:", color);
        }
    };

    $scope.getImageOrVideoStyle = function (image = {}) {
        const defaultShadowColor = '#000000';
        const shadowColor = image.shadowColor
            ? '#' + image.shadowColor.replace(/^#/, '')
            : defaultShadowColor;

        const shadowOpacity = (image.shadowOpacity || 0) / 100;
        const shadowObssetX = image.shadowObssetX || 0;
        const shadowObssetY = image.shadowObssetY || 0;
        const shadowBlurRadius = image.shadowBlurRadius || 10;
        const borderRadius = image.borderRadius || 0;

        const rgbColor = hexToRgb(shadowColor);
        const rgbaColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${shadowOpacity})`;

        const styles = {
            'box-shadow': `${shadowObssetX}px ${shadowObssetY}px ${shadowBlurRadius}px ${rgbaColor}`,
            'border-radius': `${borderRadius}px`,
            'transition': 'transform 0.3s ease'
        };

        return styles;
    };

    function hexToRgb(hex) {
        hex = hex.replace(/^#/, '');
        const bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    $scope.headerDesktopLayoutStyles = [
        {
            styleName: "Style 1",
            styleValue: "style1"
        },
        {
            styleName: "Style 2",
            styleValue: "style2"
        },
        {
            styleName: "Style 3",
            styleValue: "style3"
        }
    ];

    $scope.headerMobileLayoutStyles = [
        {
            styleName: "Style 1",
            styleValue: "style1"
        }
    ];
}

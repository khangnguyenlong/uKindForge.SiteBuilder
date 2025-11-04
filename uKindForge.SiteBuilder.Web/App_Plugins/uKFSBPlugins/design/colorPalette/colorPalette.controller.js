angular.module('umbraco').controller('uKindForge.ColorPaletteController',
    function ($scope, angularHelper, $element, eventsService, $timeout, designService, editorState) {
        $scope.settings = {
            type: 'color',
            showInput: true,
            allowEmpty: true,
            showAlpha: false
        };

        if (!$scope.model.value) {
            $scope.model.value = createDefaultValue();
        }

        function createDefaultValue() {
            return {
                userInput: {
                    brandColor: ""
                },
                ColorPalette: createColorPalette(),
                ColorToken: {
                    Header: {
                        Frame: {
                            HeaderBackground: "",
                            HeaderBorder: "",
                            BrandText: "",
                        },
                        NavBar: {
                            MenuGroupBackground: "",
                            MenuGroupBorder: "",
                            MenuItemText: "",
                            MenuItemTextHover: "",
                            MenuItemBorder: "",
                            MenuItemBorderHover: "",
                            MenuItemBackground: "",
                            MenuItemBackgroundHover: "",
                            MenuItemUnderlineHover: "",
                            MenuItemSeparator: ""
                        },
                        PrimaryButton: createDefaultButton(),
                        SecondaryButton: createDefaultButton(),
                        DropdownMenu: {
                            Background: "",
                            ItemText: "",
                            ItemTextHover: "",
                            ItemBackgroundHover: "",
                            Border: "",
                            SectionTitle: ""
                        },
                        Hamberger: {
                            Text: ""
                        }
                    },
                    Footer: createDefaultSection(),
                    Sections: [
                        createDefaultSection(),
                        createDefaultSection(),
                        createDefaultSection(),
                        createDefaultSection(),
                        createDefaultSection()
                    ]
                }
            };
        }

        function createColorPalette() {
            return {
                Primary: {
                    Main: "",
                    Shade: "",
                    Tint: "",
                    OnMainText: "",
                },
                Accent: {
                    Main: "",
                    Shade: "",
                    Tint: "",
                    OnMainText: "",
                },
                NeutralLight: {
                    Background: "",
                    Surface: "",
                    TextMain: "",
                    TextMuted: "",
                    Border: "",
                },
                NeutralDark: {
                    Background: "",
                    Surface: "",
                    TextMain: "",
                    TextMuted: "",
                    Border: "",
                },
                AdditionalColor1: {
                    Main: "",
                },
                AdditionalColor2: {
                    Main: "",
                },
                AdditionalColor3: {
                    Main: "",
                },
                AdditionalColor4: {
                    Main: "",
                },
                AdditionalColor5: {
                    Main: "",
                }
            };
        }

        function getColorPaletteValue(colorPalette) {
            let colors = [
                {
                    color: colorPalette.Primary.Main,
                    name: "Primary Main",
                    tokenKey: "--color-primary-main"
                },
                {
                    color: colorPalette.Primary.Shade,
                    name: "Primary Shade",
                    tokenKey: "--color-primary-shade"
                },
                {
                    color: colorPalette.Primary.Tint,
                    name: "Primary Tint",
                    tokenKey: "--color-primary-tint"
                },
                {
                    color: colorPalette.Primary.OnMainText,
                    name: "Primary On main text",
                    tokenKey: "--color-primary-on-main-text"
                },
                {
                    color: colorPalette.Accent.Main,
                    name: "Accent Main",
                    tokenKey: "--color-accent-main"
                },
                {
                    color: colorPalette.Accent.Shade,
                    name: "Accent Shade",
                    tokenKey: "--color-accent-shade"
                },
                {
                    color: colorPalette.Accent.Tint,
                    name: "Accent Tint",
                    tokenKey: "--color-accent-tint"
                },
                {
                    color: colorPalette.Accent.OnMainText,
                    name: "Accent On main text",
                    tokenKey: "--color-accent-on-main-text"
                },
                {
                    color: colorPalette.NeutralLight.Background,
                    name: "Neutral Light Background",
                    tokenKey: "--color-neutral-light-bg"
                },
                {
                    color: colorPalette.NeutralLight.Surface,
                    name: "Neutral Light Surface",
                    tokenKey: "--color-neutral-light-surface"
                },
                {
                    color: colorPalette.NeutralLight.TextMain,
                    name: "Neutral Light Text main",
                    tokenKey: "--color-neutral-light-text-main"
                },
                {
                    color: colorPalette.NeutralLight.TextMuted,
                    name: "Neutral Light Text muted",
                    tokenKey: "--color-neutral-light-text-muted"
                },
                {
                    color: colorPalette.NeutralLight.Border,
                    name: "Neutral Light Border",
                    tokenKey: "--color-neutral-light-border"
                },
                {
                    color: colorPalette.NeutralDark.Background,
                    name: "Neutral Dark Background",
                    tokenKey: "--color-neutral-dark-bg"
                },
                {
                    color: colorPalette.NeutralDark.Surface,
                    name: "Neutral Dark Surface",
                    tokenKey: "--color-neutral-dark-surface"
                },
                {
                    color: colorPalette.NeutralDark.TextMain,
                    name: "Neutral Dark Text main",
                    tokenKey: "--color-neutral-dark-text-main"
                },
                {
                    color: colorPalette.NeutralDark.TextMuted,
                    name: "Neutral Dark Text muted",
                    tokenKey: "--color-neutral-dark-text-muted"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Neutral Dark Border",
                    tokenKey: "--color-neutral-dark-border"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Additional Color #1",
                    tokenKey: "--color-additional-1-main"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Additional Color #2",
                    tokenKey: "--color-additional-2-main"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Additional Color #3",
                    tokenKey: "--color-additional-3-main"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Additional Color #4",
                    tokenKey: "--color-additional-4-main"
                },
                {
                    color: colorPalette.NeutralDark.Border,
                    name: "Additional Color #5",
                    tokenKey: "--color-additional-5-main"
                }
            ];

            return colors.map(x => ({
                color: !x.color.startsWith('#') ? `#${x.color}` : x.color,
                name: x.name,
                tokenKey: x.tokenKey
            }));
        }

        $scope.colors = getColorPaletteValue($scope.model.value.ColorPalette);
        console.log("colors: ", $scope.colors);

        function createDefaultButton() {
            return {
                Background: {},
                BackgroundHover: {},
                Text: {},
                TextHover: {},
                Border: {},
                BorderHover: {}
            }
        }

        function createDefaultSection() {
            return {
                id: String.CreateGuid(),
                Base: {
                    Background: "",
                    Heading: "",
                    HighlightText: "",
                    Text: "",
                    Line: ""
                },
                PrimaryButton: createDefaultButton(),
                SecondaryButton: createDefaultButton(),
                Link: {
                    Text: "",
                    TextHover: "",
                    Underline: "",
                    UnderlineHover: ""
                },
                Badge: {
                    Text: "",
                    Background: "",
                }
            }
        }

        $scope.onChange = function (color, path) {
            console.log("color", color);
            if (!path || typeof path !== 'string') {
                return;
            }

            let newValue = null;

            if (!color || (color.getAlpha && color.getAlpha() === 0)) {
                newValue = null; // transparent
            } else {
                const alpha = color.getAlpha ? color.getAlpha() : 1;

                if (alpha === 1) {
                    // hex
                    newValue = color.toHexString();
                } else {
                    // rgba(r,g,b,a)
                    const rgb = color.toRgb();
                    newValue = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
                }
            }

            // "colorPalette.primary.main" -> ["colorPalette","primary","main"]
            var keys = path.split('.');

            var target = $scope.model.value;

            for (var i = 0; i < keys.length - 1; i++) {
                var k = keys[i];

                if (target[k] === undefined || target[k] === null) {
                    target[k] = {};
                }

                target = target[k];
            }

            var lastKey = keys[keys.length - 1];
            target[lastKey] = newValue;
        };

        //function hide(color) {
        //    // show the add button
        //    $element.find('.btn.add').show();
        //}
        //function show(color) {
        //    // hide the add button
        //    $element.find('.btn.add').hide();
        //}
        //function change(color) {
        //    angularHelper.safeApply($scope, function () {
        //        if (color) {
        //            $scope.newColor = color.toHexString().trimStart('#');
        //        }
        //    });
        //}
        //var evts = [];
        //evts.push(eventsService.on('toggleValue', function (e, args) {
        //    vm.labelEnabled = args.value;
        //}));
        //$scope.$on('$destroy', function () {
        //    for (var e in evts) {
        //        eventsService.unsubscribe(evts[e]);
        //    }
        //});

        //if (!$scope.model.value && !Utilities.isArray($scope.model.value)) {
        //    $scope.model.value = [{ label: "000000", value: "000000" }];
        //}

        //for (var i = 0; i < $scope.model.value.length; i++) {
        //    var item = $scope.model.value[i];
        //    item.label = item.hasOwnProperty('label') ? item.label : item.value;
        //}

        //function validLabel(label) {
        //    return label !== null && typeof label !== 'undefined' && label !== '' && label.length && label.length > 0;
        //}
        //function remove(item, evt) {
        //    evt.preventDefault();
        //    $scope.model.value = _.reject($scope.model.value, function (x) {
        //        return x.value === item.value && x.label === item.label;
        //    });
        //    setDirty();
        //}
        //function add(evt) {
        //    evt.preventDefault();
        //    if ($scope.newColor) {
        //        var newLabel = validLabel($scope.newLabel) ? $scope.newLabel : $scope.newColor;
        //        var exists = _.find($scope.model.value, function (item) {
        //            return item != vm.editItem && (item.value.toUpperCase() === $scope.newColor.toUpperCase() || item.label.toUpperCase() === newLabel.toUpperCase());
        //        });
        //        if (!exists) {
        //            if (vm.editItem == null) {
        //                $scope.model.value.push({
        //                    value: $scope.newColor,
        //                    label: newLabel
        //                });
        //            } else {
        //                vm.editItem.value = $scope.newColor;
        //                vm.editItem.label = newLabel;
        //                vm.editItem = null;
        //            }
        //            $scope.newLabel = '';
        //            $scope.hasError = false;
        //            $scope.focusOnNew = true;
        //            setDirty();
        //            return;
        //        }
        //        // there was an error, do the highlight (will be set back by the directive)
        //        $scope.hasError = true;
        //    }
        //}
        //function edit(item, evt) {
        //    evt.preventDefault();
        //    vm.editItem = item;
        //    $scope.newColor = item.value;
        //    $scope.newLabel = item.label;
        //}
        //function cancel(evt) {
        //    evt.preventDefault();
        //    vm.editItem = null;
        //    $scope.newColor = defaultColor;
        //    $scope.newLabel = defaultLabel;
        //}
        //function setDirty() {
        //    if (vm.modelValueForm) {
        //        vm.modelValueForm.selectedColor.$setDirty();
        //    }
        //}

        //$scope.sortableOptions = {
        //    axis: 'y',
        //    containment: 'parent',
        //    cursor: 'move',
        //    //handle: ".handle, .thumbnail",
        //    items: '> div.control-group',
        //    tolerance: 'pointer',
        //    update: function update(e, ui) {
        //        setDirty();
        //    }
        //};

        // Color Settings

        //const colorPaletteProperty = designService.getProperty("colors", "settings", "colorPalette", editorState.getCurrent());
        //let colorPaletteValue = getColorPalatteValue(colorPaletteProperty);
        //colorPaletteValue.unshift(["rgba(0,0,0,0)"]);

        //$scope.settings = {
        //    palette: colorPaletteValue,
        //    showPalette: true,
        //    showPaletteOnly: true,
        //    showInput: false,
        //    allowEmpty: true,
        //    showAlpha: true
        //};

        //$scope.onChange = function (color, propertyGroup, propertyKey) {
        //    let newValue = null;

        //    if (!color || (color.getAlpha && color.getAlpha() === 0)) {
        //        newValue = null; // "transparent"
        //    } else {
        //        const alpha = color.getAlpha ? color.getAlpha() : 1;

        //        if (alpha === 1) {
        //            newValue = color.toHexString().replace(/^#/, '');
        //        } else {
        //            const rgb = color.toRgb();
        //            newValue = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
        //        }
        //    }

        //    if (propertyGroup && propertyGroup.id) {
        //        propertyGroup[propertyKey] = newValue;
        //    } else if ($scope.model.value[propertyGroup]) {
        //        $scope.model.value[propertyGroup][propertyKey] = newValue;
        //    } else {
        //        $scope.model.value[propertyGroup] = { [propertyKey]: newValue };
        //    }
        //};


        //function getColorPalatteValue(colorPaletteProperty, chunkSize = 3) {
        //    let value = [];
        //    if (!colorPaletteProperty.value || colorPaletteProperty.value.length <= 0) {
        //        value.push({ label: "000000", value: "000000" });
        //        return value;
        //    }

        //    for (let i = 0; i < colorPaletteProperty.value.length; i += chunkSize) {
        //        const colorPaletteChunkValue = colorPaletteProperty.value.slice(i, i + chunkSize);
        //        value.push(colorPaletteChunkValue.map(c => c.value));
        //    }

        //    return value;
        //}

        //$scope.$watch(
        //    function () {
        //        if (!colorPaletteProperty) return;
        //        return colorPaletteProperty.value;
        //    },
        //    function (newValue, oldValue) {
        //        if (newValue !== oldValue) {
        //            colorPaletteValue = getColorPalatteValue(colorPaletteProperty);
        //            $timeout(updateBaselineColors, 100);
        //        }
        //    },
        //    true
        //);

        //function updateBaselineColors() {
        //    const colorPickerControls = $element.find('.umb-color-picker input');

        //    // Check if Spectrum is available
        //    if (typeof $.fn.spectrum !== "function") {
        //        console.error("Spectrum plugin is not loaded!");
        //        return;
        //    }

        //    colorPickerControls.each(function () {
        //        $(this).spectrum("option", "palette", colorPaletteValue);
        //    });
        //}


        $scope.generateColors = function ($event) {
            if (!$scope.isValidColor($scope.model.value?.userInput?.brandColor)) {
                return;
            }

            const params = { BrandColorHex: $scope.model.value?.userInput?.brandColor };
            designService.generateColors(params).then(function (response) {
                console.log("response", response);
                if (!response || !response.ColorPalette) {
                    return;
                }

                $scope.model.value.ColorPalette = response.ColorPalette;
                $scope.model.value.ColorToken = response.ColorToken;

                $scope.colors = getColorPaletteValue(response.ColorPalette);
            }, function (err) {
                console.log("generate color error: ", err);
            });
        };

        $scope.addItem = function () {
            const item = createDefaultSection();
            $scope.model.value.ColorToken.Sections.push(item);
        }
        $scope.deleteItem = function (value) {
            const index = $scope.model.value.ColorToken.Sections.indexOf(value);
            if (index > -1) {
                $scope.model.value.ColorToken.Sections.splice(index, 1);
            }
        };

        $scope.isValidColor = function (str) {
            if (!str || typeof str !== 'string') return false;
            const trimmed = str.trim();
            const isValidHex = /^#(?:[A-Fa-f0-9]{3,4}){1,2}$/.test(trimmed);
            //const isValidRgba = /^rgba?\(\s*(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*,\s*(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\s*,\s*(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\s*,\s*(0|1|0?\.\d+))?\s*\)$/.test(trimmed);
            //return isValidHex || isValidRgba;
            return isValidHex;
        };



        //$scope.contentSortableOptions = {
        //    axis: 'y',
        //    containment: '.content-sortable-wrap',
        //    items: '> div.card',
        //    tolerance: 'intersect',
        //    handle: ".card-header",
        //    cursor: 'grabbing'
        //};
        //$scope.buttonSortableOptions = {
        //    axis: 'y',
        //    containment: '.button-sortable-wrap',
        //    items: '> div.card',
        //    tolerance: 'intersect',
        //    handle: ".card-header",
        //    cursor: 'grabbing'
        //};

        //$scope.tabs = [
        //    { title: "Overview", content: "This is the overview tab content." },
        //    { title: "Specifications", content: "This is the specifications tab content." },
        //    { title: "Reviews", content: "This is the reviews tab content." }
        //];
        //$scope.activeTab = 0;

        //$scope.setActiveTab = function (index) {
        //    $scope.activeTab = index;
        //};

        //$scope.getColorValue = function (value) {
        //    if (!value) return "transparent";

        //    if (typeof value === "string" && value.startsWith("rgba")) return value;
        //    if (value === "transparent") return "transparent";

        //    return "#" + value;
        //};

    });
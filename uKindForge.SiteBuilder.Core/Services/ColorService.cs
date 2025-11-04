using System.Drawing;
using uKindForge.SiteBuilder.Core.Extensions;
using uKindForge.SiteBuilder.Core.Helpers;
using uKindForge.SiteBuilder.Core.Models;
using static Umbraco.Cms.Core.PropertyEditors.MultiUrlPickerValueEditor;


namespace uKindForge.SiteBuilder.Core.Services
{
    public class ColorService() : IColorService
    {
        private readonly Random rand = new();

        public Task<ColorResponseModel> GenerateColorsAsync(ColorRequestModel request)
        {
            request.Criteria ??= PickRandomCriteria();

            var colorPalette = GenerateColorPalette(request);
            var colorToken = GenerateColorToken(request, colorPalette);

            var response = new ColorResponseModel()
            {
                ColorPalette = colorPalette,
                ColorToken = colorToken
            };

            return Task.FromResult(response);
        }

        private CriteriaModel PickRandomCriteria()
        {
            return new CriteriaModel
            {
                AccentMode = rand.PickOne([.. EnumHelper.GetEnumValues<AccentMode>()]),
                NeutralFlavor = rand.PickOne([.. EnumHelper.GetEnumValues<NeutralFlavor>()]),
                HeaderStyle = rand.PickOne([.. EnumHelper.GetEnumValues<HeaderStyle>()]),
                FooterStyle = rand.PickOne([.. EnumHelper.GetEnumValues<FooterStyle>()]),
                SectionAccentRatio = rand.NextDouble() // 0..1
            };
        }

        private ColorPaletteModel GenerateColorPalette(ColorRequestModel request)
        {
            var primaryMain = ColorHelper.ParseHex(request.BrandColorHex);
            var primaryShade = ColorHelper.Darken(primaryMain, rand.Next(8, 13));     // 8–12%
            var primaryTint = ColorHelper.Tint(primaryMain, rand.Next(82, 93));      // 82–92% white
            var primaryOn = ColorHelper.GetOnColor(primaryMain);                   // black or white

            // Accent
            var accentMain = BuildAccent(primaryMain, request.Criteria);
            var accentShade = ColorHelper.Darken(accentMain, rand.Next(8, 13));
            var accentTint = ColorHelper.Tint(accentMain, rand.Next(82, 93));
            var accentOn = ColorHelper.GetOnColor(accentMain);

            // Neutral light
            var neutralLight = BuildNeutralLight(request.Criteria);

            // Neutral dark
            var neutralDark = BuildNeutralDark(request.Criteria);

            // Additional
            var additional = BuildAdditionalColors(primaryMain, accentMain, request.Criteria, rand);

            return new ColorPaletteModel
            {
                Primary = new PrimaryModel
                {
                    Main = ColorHelper.ToHex(primaryMain),
                    Shade = ColorHelper.ToHex(primaryShade),
                    Tint = ColorHelper.ToHex(primaryTint),
                    OnMainText = ColorHelper.ToHex(primaryOn)
                },
                Accent = new AccentModel
                {
                    Main = ColorHelper.ToHex(accentMain),
                    Shade = ColorHelper.ToHex(accentShade),
                    Tint = ColorHelper.ToHex(accentTint),
                    OnMainText = ColorHelper.ToHex(accentOn)
                },
                NeutralLight = neutralLight,
                NeutralDark = neutralDark,
                AdditionalColor1 = additional[0],
                AdditionalColor2 = additional[1],
                AdditionalColor3 = additional[2],
                AdditionalColor4 = additional[3],
                AdditionalColor5 = additional[4],
            };
        }

        private Color BuildAccent(Color primaryMain, CriteriaModel c)
        {
            var hsl = ColorHelper.ToHsl(primaryMain);

            switch (c.AccentMode)
            {
                case AccentMode.Complement:
                    hsl.H = (hsl.H + 180) % 360;
                    break;
                case AccentMode.Split:
                    hsl.H = (hsl.H + rand.PickOne(150, 210)) % 360;
                    break;
                case AccentMode.Analog:
                default:
                    hsl.H = (hsl.H + rand.PickOne(25, 35)) % 360;
                    break;
            }
            // Be gentle with saturation to avoid glare
            hsl.S = Math.Min(0.85, hsl.S + 0.1);

            // keep lightness neer primary
            return ColorHelper.FromHsl(hsl);
        }

        private NeutralModel BuildNeutralLight(CriteriaModel c)
        {
            if (c.NeutralFlavor == NeutralFlavor.Warm)
            {
                return new NeutralModel
                {
                    Background = "#F4EFE6",
                    Surface = "#EFE9E0",
                    TextMain = "#23201B",
                    TextMuted = "#5C574F",
                    Border = "#E0D8CC"
                };
            }

            // default = clean white
            return new NeutralModel
            {
                Background = "#FFFFFF",
                Surface = "#F9FAFB",
                TextMain = "#111827",
                TextMuted = "#4B5563",
                Border = "#E5E7EB"
            };
        }

        private NeutralModel BuildNeutralDark(CriteriaModel c)
        {
            return new NeutralModel
            {
                Background = "#0F0F0F",
                Surface = "#1F1F1F",
                TextMain = "#FFFFFF",
                TextMuted = "rgba(255,255,255,0.7)",
                Border = "rgba(255,255,255,0.2)"
            };
        }

        private AdditionalColorModel[] BuildAdditionalColors(Color primary, Color accent, CriteriaModel c, Random rand)
        {
            var arr = new AdditionalColorModel[5];

            arr[0] = new AdditionalColorModel
            {
                Main = ColorHelper.ToHex(ColorHelper.Tint(primary, 90))
            };

            arr[1] = new AdditionalColorModel
            {
                Main = ColorHelper.ToHex(ColorHelper.Tint(accent, 90))
            };

            arr[2] = new AdditionalColorModel { Main = null };
            arr[3] = new AdditionalColorModel { Main = null };
            arr[4] = new AdditionalColorModel { Main = null };

            return arr;
        }

        private ColorTokensModel GenerateColorToken(ColorRequestModel request, ColorPaletteModel colorPalette)
        {
            var settings = new ColorTokensModel();
            var criteria = request.Criteria;

            // HEADER
            settings.Header = new HeaderSettingsModel
            {
                Frame = new HeaderFrameModel
                {
                    HeaderBackground = criteria.HeaderStyle == HeaderStyle.Dark
                        ? "--color-neutral-dark-bg"
                        : "--color-neutral-light-bg",
                    HeaderBorder = criteria.HeaderStyle == HeaderStyle.Dark
                        ? "--color-neutral-dark-border"
                        : "--color-neutral-light-border",
                    BrandText = criteria.HeaderStyle == HeaderStyle.Dark
                        ? "--color-neutral-dark-text-main"
                        : "--color-neutral-light-text-main"
                },
                NavBar = new NavBarModel
                {
                    MenuGroupBackground = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-surface" : "--color-neutral-light-surface",
                    MenuGroupBorder = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                    MenuItemText = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main",
                    MenuItemTextHover = "--color-primary-main",
                    MenuItemBorder = null,
                    MenuItemBorderHover = "--color-primary-main",
                    MenuItemBackground = null,
                    MenuItemBackgroundHover = "--color-primary-tint",
                    MenuItemUnderlineHover = "--color-primary-main",
                    MenuItemSeparator = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                },
                PrimaryButton = new ButtonModel
                {
                    Background = "--color-primary-main",
                    BackgroundHover = "--color-primary-shade",
                    Text = "--color-primary-on-main-text",
                    TextHover = "--color-primary-on-main-text",
                    Border = "--color-primary-main",
                    BorderHover = "--color-primary-shade"
                },
                SecondaryButton = new ButtonModel
                {
                    Background = "transparent",
                    BackgroundHover = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-surface" : "--color-neutral-light-surface",
                    Text = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main",
                    TextHover = "--color-primary-main",
                    Border = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                    BorderHover = "--color-primary-main"
                },
                DropdownMenu = new DropdownMenuModel
                {
                    Background = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-surface" : "--color-neutral-light-surface",
                    ItemText = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main",
                    ItemTextHover = "--color-primary-main",
                    ItemBackgroundHover = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-bg" : "--color-neutral-light-bg",
                    Border = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                    SectionTitle = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-text-muted" : "--color-neutral-light-text-muted"
                },
                Hamberger = new HamburgerModel
                {
                    Text = criteria.HeaderStyle == HeaderStyle.Dark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main"
                }
            };

            // FOOTER
            settings.Footer = BuildFooterSettings(colorPalette, criteria);

            // SECTIONS
            settings.Sections = BuildSectionSettings(colorPalette, criteria);

            return settings;
        }

        private SectionSettingsModel BuildFooterSettings(ColorPaletteModel colorPalette, CriteriaModel criteria)
        {
            var useDark = criteria.FooterStyle == FooterStyle.Dark;

            return new SectionSettingsModel
            {
                Base = new SectionBaseModel
                {
                    Background = useDark ? "--color-neutral-dark-bg" : "--color-neutral-light-bg",
                    Heading = useDark ? "--color-accent-main" : "--color-primary-main",
                    HighlightText = useDark ? "--color-accent-main" : "--color-accent-main",
                    Text = useDark ? "--color-neutral-dark-text-muted" : "--color-neutral-light-text-muted",
                    Line = useDark ? "--color-neutral-dark-border" : "--color-neutral-light-border"
                },
                PrimaryButton = new ButtonModel
                {
                    Background = "--color-accent-main",
                    BackgroundHover = "--color-accent-shade",
                    Text = "--color-accent-on-main-text",
                    TextHover = "--color-accent-on-main-text",
                    Border = "--color-accent-main",
                    BorderHover = "--color-accent-shade"
                },
                SecondaryButton = new ButtonModel
                {
                    Background = "transparent",
                    BackgroundHover = useDark ? "--color-neutral-dark-surface" : "--color-neutral-light-surface",
                    Text = useDark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main",
                    TextHover = "--color-primary-main",
                    Border = useDark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                    BorderHover = "--color-primary-main"
                },
                Link = new LinkModel
                {
                    Text = useDark ? "--color-neutral-dark-text-main" : "--color-neutral-light-text-main",
                    TextHover = "--color-accent-main",
                    Underline = useDark ? "--color-neutral-dark-border" : "--color-neutral-light-border",
                    UnderlineHover = "--color-accent-main"
                },
                Badge = new BadgeModel
                {
                    Background = "--color-accent-tint",
                    Text = "--color-accent-main"
                }
            };
        }

        private List<SectionSettingsModel> BuildSectionSettings(ColorPaletteModel colorPalette, CriteriaModel criteria)
        {
            var list = new List<SectionSettingsModel>();

            for (int i = 0; i < 5; i++)
            {
                var useAccent = rand.NextDouble() < criteria.SectionAccentRatio;

                var sec = new SectionSettingsModel
                {
                    Base = new SectionBaseModel
                    {
                        Background = i == 0
                            ? "--color-neutral-light-bg"
                            : rand.PickOne("--color-neutral-light-bg", "--color-neutral-light-surface", "--color-additional-1-main", "--color-additional-2-main"),
                        Heading = useAccent ? "--color-accent-main" : "--color-primary-main",
                        HighlightText = useAccent ? "--color-accent-main" : "--color-primary-main",
                        Text = "--color-neutral-light-text-muted",
                        Line = "--color-neutral-light-border"
                    },
                    PrimaryButton = new ButtonModel
                    {
                        Background = useAccent ? "--color-accent-main" : "--color-primary-main",
                        BackgroundHover = useAccent ? "--color-accent-shade" : "--color-primary-shade",
                        Text = useAccent ? "--color-accent-on-main-text" : "--color-primary-on-main-text",
                        TextHover = useAccent ? "--color-accent-on-main-text" : "--color-primary-on-main-text",
                        Border = useAccent ? "--color-accent-main" : "--color-primary-main",
                        BorderHover = useAccent ? "--color-accent-shade" : "--color-primary-shade",
                    },
                    SecondaryButton = new ButtonModel
                    {
                        Background = "transparent",
                        BackgroundHover = "--color-neutral-light-surface",
                        Text = useAccent ? "--color-accent-main" : "--color-primary-main",
                        TextHover = useAccent ? "--color-accent-shade" : "--color-primary-shade",
                        Border = "--color-neutral-light-border",
                        BorderHover = useAccent ? "--color-accent-main" : "--color-primary-main"
                    },
                    Link = new LinkModel
                    {
                        Text = useAccent ? "--color-accent-main" : "--color-primary-main",
                        TextHover = useAccent ? "--color-accent-shade" : "--color-primary-shade",
                        Underline = "--color-neutral-light-border",
                        UnderlineHover = useAccent ? "--color-accent-main" : "--color-primary-main"
                    },
                    Badge = new BadgeModel
                    {
                        Background = useAccent ? "--color-accent-tint" : "--color-primary-tint",
                        Text = useAccent ? "--color-accent-main" : "--color-primary-main"
                    }
                };

                list.Add(sec);
            }

            return list;
        }

    }
}

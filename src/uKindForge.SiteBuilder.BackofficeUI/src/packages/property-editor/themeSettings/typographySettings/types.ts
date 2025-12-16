import type { SelectedFont } from "../../../common/font/types";

export type TypographyKey =
	| "h1"
	| "h2"
	| "h3"
	| "h4"
	| "h5"
	| "h6"
	| "paragraph";

export interface TypographyItem {
	font: SelectedFont | null;
	size: number;
	spacing: number;
}

export type TypographyModel = Record<TypographyKey, TypographyItem>;

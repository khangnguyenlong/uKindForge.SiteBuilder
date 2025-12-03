// Type for Google font JSON
export interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  files: Record<string, string>;
  category: string;
}

export interface SelectedFont {
  family: string;
  variant: string;
}
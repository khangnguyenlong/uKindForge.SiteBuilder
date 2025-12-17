// Type for Google font JSON
export interface GoogleFont {
  family: string;
  variants: string[];
  subsets: string[];
  files: Record<string, string>;
  category: string;
}

export interface SelectedFont {
  id: string;
  family: string;
  variant: string;
  category: string;
  selected: boolean;
  error?: boolean;
}
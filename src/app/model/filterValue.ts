// export interface FilterValue {
//   price?: { [key: string]: number };
//   year?: { [key: string]: string };
//   automaker?: { [key: string]: string };
//   model?: { [key: string]: string };
//   engine?: { [key: string]: string };
//   color?: { [key: string]: string };
//   transmission?: { [key: string]: string };
//   features?: { [key: string]: string };
//   bodystyle?: { [key: string]: string };
// }

interface CheckboxFilterValue {
  [key: string]: boolean; 
}

// export interface FilterValue {
//   [key: string]: CheckboxFilterValue; 
// }

export type FilterValue = Record<string, CheckboxFilterValue>

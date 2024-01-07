import { FILTERS } from "./consts";

export interface Coffee{
  id:        number;
  name:      string;
  image:     string;
  price:     string;
  rating:    number;
  votes:     number;
  popular:   boolean;
  available: boolean;
}
export type FilterValue = typeof FILTERS[keyof typeof FILTERS]
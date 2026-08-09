export type ProductSort = 'price-asc' | 'price-desc' | 'rating-asc' | 'rating-desc';

export type ProductFilters = {
  search: string;
  sort?: ProductSort;
  categories: string[];
};

export const defaultProductFilters: ProductFilters = {
  search: '',
  sort: undefined,
  categories: [] as string[],
};

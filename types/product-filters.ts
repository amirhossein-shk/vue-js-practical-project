export type ProductSort = 'price-asc' | 'price-desc';

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

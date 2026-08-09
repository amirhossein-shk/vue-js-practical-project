export type ProductRating = {
  rate: number;
  count: number;
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export type ProductCategory = {
  value: string;
  label: string;
  count: number;
};

export type ProductsCategories = Array<ProductCategory>;

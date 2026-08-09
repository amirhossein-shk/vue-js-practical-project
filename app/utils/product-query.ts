import type { Product } from '~~/types/product';
import type { ProductFilters } from '~~/types/product-filters';

export function filterProducts(products: Product[], filters: ProductFilters): Product[] {
  const searchQuery = filters.search.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery) ||
      product.description.toLowerCase().includes(searchQuery) ||
      product.category.toLowerCase().includes(searchQuery);

    const matchesCategory =
      filters.categories.length === 0 || filters.categories.includes(product.category);

    return matchesSearch && matchesCategory;
  });
}

export function sortProducts(products: Product[], sort: ProductFilters['sort']): Product[] {
  const sortedProducts = [...products];

  sortedProducts.sort((firstProduct, secondProduct) => {
    switch (sort) {
      case 'price-asc':
        return firstProduct.price - secondProduct.price;

      case 'price-desc':
        return secondProduct.price - firstProduct.price;

      default:
        return 0;
    }
  });

  return sortedProducts;
}

export function queryProducts(products: Product[], filters: ProductFilters): Product[] {
  const filteredProducts = filterProducts(products, filters);

  return sortProducts(filteredProducts, filters.sort);
}

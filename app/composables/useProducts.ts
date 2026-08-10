import { queryProducts } from '~/utils/product-query';
import type { Product } from '~~/types/product';
import type { ProductFilters } from '~~/types/product-filters';

const PRODUCTS_API_URL = 'https://fakestoreapi.com/products';

interface UseProductsOptions {
  filters: Ref<ProductFilters>;
}

export function useProducts(options: UseProductsOptions) {
  const {
    data: rawProducts,
    pending: loading,
    error: fetchError,
    refresh,
  } = useAsyncData<Product[]>('products-raw-data', () => $fetch<Product[]>(PRODUCTS_API_URL), {
    default: () => [],
  });

  const error = computed(() => (fetchError.value ? 'دریافت محصولات با خطا مواجه شد.' : null));

  const products = computed(() => {
    return queryProducts(rawProducts.value ?? [], options.filters.value);
  });

  const totalProducts = computed(() => products.value.length);

  const categories = computed(() => {
    return [...new Set((rawProducts.value ?? []).map((product) => product.category))];
  });

  const categoryCounts = computed<Record<string, number>>(() => {
    return (rawProducts.value ?? []).reduce<Record<string, number>>((counts, product) => {
      counts[product.category] = (counts[product.category] ?? 0) + 1;
      return counts;
    }, {});
  });

  const categoryOptions = computed(() => {
    return categories.value.map((category) => ({
      value: category,
      label: category,
      count: categoryCounts.value[category] ?? 0,
    }));
  });

  return {
    rawProducts,
    products,
    totalProducts,
    categories,
    categoryCounts,
    categoryOptions,
    loading,
    error,
    refresh,
  };
}

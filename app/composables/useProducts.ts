import { queryProducts } from '~/utils/product-query';
import type { Product } from '~~/types/product';
import type { ProductFilters } from '~~/types/product-filters';

const PRODUCTS_API_URL = 'https://fakestoreapi.com/products';

interface UseProductsOptions {
  filters: Ref<ProductFilters>;
}

export function useProducts(options: UseProductsOptions) {
  const rawProducts = useState<Product[]>('products-raw-data', () => []);

  const hasFetched = useState<boolean>('products-has-fetched', () => false);

  const loading = ref(false);
  const error = ref<string | null>(null);

  async function fetchProducts() {
    if (hasFetched.value) return;

    loading.value = true;
    error.value = null;

    try {
      rawProducts.value = await $fetch<Product[]>(PRODUCTS_API_URL);
      hasFetched.value = true;
    } catch {
      error.value = 'دریافت محصولات با خطا مواجه شد.';
    } finally {
      loading.value = false;
    }
  }

  const products = computed(() => {
    return queryProducts(rawProducts.value, options.filters.value);
  });

  const totalProducts = computed(() => products.value.length);

  const categories = computed(() => {
    return [...new Set(rawProducts.value.map((product) => product.category))];
  });

  const categoryCounts = computed<Record<string, number>>(() => {
    return rawProducts.value.reduce<Record<string, number>>((counts, product) => {
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
    products,
    rawProducts,
    totalProducts,
    categories,
    categoryCounts,
    categoryOptions,
    loading,
    error,
    fetchProducts,
  };
}

import { computed } from 'vue';
import type { LocationQuery, LocationQueryRaw } from 'vue-router';

import type { ProductFilters, ProductSort } from '~~/types/product-filters';
import { defaultProductFilters } from '~~/types/product-filters';

const ALLOWED_SORTS: ProductSort[] = ['price-asc', 'price-desc', 'rating-asc', 'rating-desc'];

function getSingleQueryValue(value: string | string[] | undefined): string | undefined {
  if (Array.isArray(value)) return value[0];
  return typeof value === 'string' ? value : undefined;
}

function getQueryArray(value: string | string[] | undefined): string[] {
  if (Array.isArray(value)) return value;
  if (typeof value === 'string' && value.trim()) return [value];
  return [];
}

function normalizeSort(value: string | undefined): ProductSort | undefined {
  return value && ALLOWED_SORTS.includes(value as ProductSort) ? (value as ProductSort) : undefined;
}

export function normalizeFiltersFromQuery(query: LocationQuery): ProductFilters {
  return {
    search: getSingleQueryValue(query.q as string[])?.trim() ?? defaultProductFilters.search,
    categories: getQueryArray(query.category as string[]),
    sort: normalizeSort(getSingleQueryValue(query.sort as ProductSort)),
  };
}

export function buildQueryFromFilters(
  filters: ProductFilters,
  currentQuery: LocationQuery = {}
): LocationQueryRaw {
  const query: LocationQueryRaw = { ...currentQuery };

  delete query.q;
  delete query.category;
  delete query.sort;

  if (filters.search.trim()) query.q = filters.search.trim();
  if (filters.categories.length) query.category = [...new Set(filters.categories)];
  if (filters.sort !== defaultProductFilters.sort) query.sort = filters.sort;

  return query;
}

export function useProductFilters() {
  const route = useRoute();
  const router = useRouter();

  const filters = computed({
    get: () => normalizeFiltersFromQuery(route.query),
    set: (nextFilters) => {
      router.replace({
        query: buildQueryFromFilters(nextFilters, route.query),
      });
    },
  });

  function updateFilters(patch: Partial<ProductFilters>) {
    filters.value = {
      ...filters.value,
      ...patch,
    };
  }

  return {
    filters,
    updateFilters,
  };
}

<script setup lang="ts">
import type { ProductsCategories } from '~~/types/product.ts';
import type { ProductFilters, ProductSort } from '~~/types/product-filters.ts';

const isFiltersOpen = ref(false);

defineProps<{
  filters: ProductFilters;
  categoryOptions: ProductsCategories;
}>();

const emit = defineEmits<{
  'update-filters': [patch: Partial<ProductFilters>];
}>();

function updateSearch(value: string) {
  emit('update-filters', { search: value });
}

function updateSort(value: ProductSort | undefined) {
  emit('update-filters', { sort: value });
}

function updateCategories(value: string[]) {
  emit('update-filters', { categories: value });
}
</script>

<template>
  <div
    class="mb-4 flex items-center justify-between lg:hidden md:hidden top-[-16px] right-0"
    :class="isFiltersOpen ? 'fixed z-50 top-[89px] right-[16px]' : 'absolute'"
  >
    <button
      type="button"
      class="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700"
      @click="isFiltersOpen = !isFiltersOpen"
    >
      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5h18M6 12h12M10 19h4"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
        />
      </svg>
      فیلترها
    </button>
  </div>
  <aside
    class="md:flex w-full flex-col gap-4 md:sticky md:h-[600px] top-[114px]"
    :class="
      isFiltersOpen
        ? 'flex h-[100vh] fixed top-[80px] right-0 bg-gray-100 px-4 pt-[60px] md:pt-0 md:bg-transparent md:px-0 md:top-[114px] md:h-[600px]'
        : 'hidden'
    "
  >
    <SidebarSearchFilter :model-value="filters.search" @update:model-value="updateSearch" />

    <SidebarSortFilter :model-value="filters.sort" @update:model-value="updateSort" />

    <SidebarCategoryFilter
      :model-value="filters.categories"
      :category-options="categoryOptions"
      @update:model-value="updateCategories"
    />
  </aside>
</template>

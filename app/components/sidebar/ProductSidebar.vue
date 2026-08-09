<script setup lang="ts">
import type { ProductsCategories } from '~~/types/product.ts';
import type { ProductFilters } from '~~/types/product-filters.ts';

const filters = defineModel<ProductFilters>('filters', { required: true });

defineProps<{
  categoryOptions: ProductsCategories;
}>();
</script>

<template>
  <aside class="flex w-full flex-col gap-4 sticky h-[600px] top-[114px]">
    <SidebarSearchFilter v-model="filters.search" />

    <SidebarSortFilter v-model="filters.sort" />

    <SidebarCategoryFilter v-model="filters.categories" :category-options="categoryOptions" />
  </aside>
</template>

<script setup lang="ts">
import ProductCard from '~/components/products/ProductCard.vue';
import ProductActiveFilters from '~/components/sidebar/ProductActiveFilters.vue';
import ProductSidebar from '~/components/sidebar/ProductSidebar.vue';
import { useProducts } from '~/composables/useProducts';
import { defaultProductFilters } from '~~/types/product-filters.ts';

const filters = ref(defaultProductFilters);

const { products, loading, error, categoryOptions, fetchProducts } = useProducts({
  filters,
});
await fetchProducts();
</script>

<template>
  <main class="min-h-screen bg-[#f8f8fb]">
    <div class="py-6 lg:py-8 mx-auto max-w-[1520px] px-4 sm:px-6 lg:px-10">
      <section
        v-if="loading"
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-6"
      >
        <div class="hidden rounded-2xl bg-white p-4 ring-1 ring-slate-200 lg:block">
          <div class="space-y-3">
            <div class="h-4 w-24 animate-pulse rounded bg-slate-200" />
            <div class="h-10 animate-pulse rounded-xl bg-slate-100" />
            <div class="h-10 animate-pulse rounded-xl bg-slate-100" />
            <div class="h-10 animate-pulse rounded-xl bg-slate-100" />
          </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div
            v-for="item in 6"
            :key="item"
            class="overflow-hidden rounded-2xl bg-white p-3 ring-1 ring-slate-200"
          >
            <div class="aspect-[4/3] animate-pulse rounded-xl bg-slate-100" />
            <div class="mt-3 space-y-2">
              <div class="h-4 w-3/4 animate-pulse rounded bg-slate-100" />
              <div class="h-4 w-1/2 animate-pulse rounded bg-slate-100" />
              <div class="h-4 w-full animate-pulse rounded bg-slate-100" />
            </div>
          </div>
        </div>
      </section>

      <section v-else class="grid grid-cols-2 gap-4 lg:grid-cols-[268px_minmax(0,1fr)] lg:gap-6">
        <ProductSidebar v-model:filters="filters" :category-options="categoryOptions" />

        <div>
          <ProductActiveFilters v-model="filters" class="mb-4" />

          <div
            v-if="error"
            class="rounded-2xl border border-red-200 bg-red-50 px-4 py-10 text-center text-sm text-red-600"
          >
            {{ error && 'مشکلی پیش آمده است.' }}
          </div>

          <div
            v-else-if="products?.length"
            class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>

          <div
            v-else
            class="rounded-2xl border border-dashed border-slate-300 bg-white px-4 py-12 text-center text-sm text-slate-500"
          >
            هیچ محصولی یافت نشد.
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

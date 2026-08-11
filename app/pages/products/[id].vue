<script setup lang="ts">
import AppBreadcrumbs from '~/components/layout/AppBreadcrumbs.vue';
import type { Product } from '~~/types/product.ts';

const route = useRoute();
const productId = route.params.id;

const { data: product, pending } = await useAsyncData<Product>(`product-${productId}`, () =>
  $fetch(`https://fakestoreapi.com/products/${productId}`)
);

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'محصول پیدا نشد' });
}

const specs = computed(() => [
  { label: 'قیمت', value: `${product.value?.price} تومان` },
  { label: 'توضیحات', value: product.value?.description },
  { label: 'دسته بندی', value: product.value?.category },
  { label: 'رتبه', value: product.value?.rating.rate },
  { label: 'تعداد', value: product.value?.rating.count },
]);
</script>

<template>
  <main dir="rtl" class="min-h-screen bg-slate-50 py-8 mb-8">
    <div class="container mx-auto px-4">
      <AppBreadcrumbs :current-label="product?.category" :to-map="{ '/products': '/' }" />

      <div v-if="pending" class="text-center py-20">در حال بارگذاری...</div>

      <div v-else class="bg-white rounded-[20px] shadow-sm overflow-hidden p-6">
        <h1 class="text-2xl font-bold text-slate-800 mb-6">{{ product?.title }}</h1>

        <div class="relative w-full h-[400px] bg-slate-100 rounded-xl overflow-hidden mb-8">
          <img
            :src="product?.image"
            :alt="product?.title"
            class="w-full h-full object-contain p-8"
          />
        </div>

        <h2 class="text-xl font-bold text-slate-800 mb-6">مشخصات فنی</h2>

        <div class="flex flex-col gap-3">
          <div
            v-for="spec in specs"
            :key="spec.label"
            class="grid grid-cols-1 gap-3 md:gap-0 md:grid-cols-[150px_1fr]"
          >
            <span
              class="text-gray-500 bg-gray-50 p-4 md:ml-3 rounded-[16px] md:rounded-tr-[16px] md:rounded-br-[16px]"
              >{{ spec.label }}</span
            >
            <span
              class="text-gray-700 font-[700] bg-gray-50 p-4 rounded-[16px] md:rounded-tl-[16px] md:rounded-bl-[16px]"
              >{{ spec.value }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

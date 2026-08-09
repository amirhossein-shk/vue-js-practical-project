<script setup lang="ts">
import type { Product } from '~~/types/product.ts';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div
    class="group block overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-md"
  >
    <div
      class="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-slate-50 p-4"
    >
      <img
        :src="product.image"
        :alt="product.title"
        class="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>

    <div class="mt-3 space-y-2 text-right">
      <h3 class="line-clamp-2 min-h-10 text-sm font-semibold leading-5 text-slate-800">
        {{ product.title }}
      </h3>

      <div class="flex items-center justify-between gap-3">
        <span class="text-xs text-slate-400">
          {{ product.category }}
        </span>

        <span class="text-sm font-bold text-pink-600"> ${{ product.price }} </span>
      </div>

      <div class="border-t text-center border-slate-100 pt-2">
        <NuxtLink :to="`/product/${product.id}`" class="block">
          <button
            class="text-sm font-bold text-[#E20054] text-center border-[1px] border-gray-100 w-full py-3 rounded-[16px]"
          >
            مشاهده جزئیات
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

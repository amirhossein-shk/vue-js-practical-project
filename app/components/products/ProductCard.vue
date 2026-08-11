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

      <div class="flex items-center justify-between py-2">
        <span class="text-xs text-slate-500"> ⭐ {{ product.rating.rate }} / 5 </span>
      </div>

      <div class="border-t text-center border-slate-100 pt-2">
        <NuxtLink :to="`/products/${product.id}`" class="block">
          <button
            class="flex justify-center items-center gap-2 text-sm font-bold text-[#E20054] text-center border-[1px] border-gray-100 w-full py-3 rounded-[16px]"
          >
            <div>مشاهده جزئیات</div>
            <div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997"
                  stroke="#E20054"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

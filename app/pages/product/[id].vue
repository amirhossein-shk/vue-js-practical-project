<script setup lang="ts">
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
      <nav class="mb-6 flex items-center gap-2 text-sm text-slate-500">
        <NuxtLink to="/" class="hover:text-pink-600"
          ><svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.55246 2.11501L2.35496 6.2775C1.76996 6.7425 1.39495 7.72502 1.52245 8.46002L2.51996 14.43C2.69996 15.495 3.71995 16.3575 4.79995 16.3575H13.2C14.2725 16.3575 15.3 15.4875 15.48 14.43L16.4775 8.46002C16.5975 7.72502 16.2225 6.7425 15.645 6.2775L10.4474 2.12251C9.64495 1.47751 8.34746 1.47751 7.55246 2.11501Z"
              stroke="#6783A0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 11.625C10.0355 11.625 10.875 10.7855 10.875 9.75C10.875 8.71447 10.0355 7.875 9 7.875C7.96447 7.875 7.125 8.71447 7.125 9.75C7.125 10.7855 7.96447 11.625 9 11.625Z"
              stroke="#6783A0"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9772_605)">
              <path
                d="M9.37685 9.64643C9.18158 9.8417 9.18158 10.1583 9.37685 10.3535L12.5591 13.5358C12.8845 13.8612 12.8845 14.3888 12.5591 14.7142C12.2337 15.0395 11.7062 15.0395 11.3808 14.7142L7.02018 10.3535C6.82492 10.1583 6.82492 9.8417 7.02018 9.64643L11.3808 5.28582C11.7062 4.96043 12.2337 4.96043 12.5591 5.28582C12.8845 5.61121 12.8845 6.13877 12.5591 6.46416L9.37685 9.64643Z"
                fill="#6783A0"
              />
            </g>
            <defs>
              <clipPath id="clip0_9772_605">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <span class="text-slate-900 font-medium">{{ product?.title }}</span>
      </nav>

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

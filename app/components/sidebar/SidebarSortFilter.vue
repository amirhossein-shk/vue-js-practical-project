<template>
  <div class="rounded-[12px] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      class="flex w-full items-center justify-between text-slate-700"
      @click="isOpen = !isOpen"
    >
      <span class="text-sm font-bold">مرتب سازی</span>
      <svg
        class="size-5 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <div v-show="isOpen" class="mt-4 flex flex-col gap-4">
      <label
        v-for="option in sortOptions"
        :key="option.value"
        class="flex cursor-pointer items-center gap-3"
      >
        <span class="text-xs font-medium transition-colors text-slate-600">{{ option.label }}</span>

        <div
          class="relative flex size-4 items-center justify-center rounded-full border-2 transition"
          :class="modelValue === option.value ? 'border-pink-600' : 'border-slate-300'"
        >
          <div v-if="modelValue === option.value" class="size-2 rounded-full bg-pink-600"></div>

          <input v-model="modelValue" type="radio" :value="option.value" class="hidden" />
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ProductSort } from '~~/types/product-filters.ts';

const modelValue = defineModel<ProductSort>({ required: true });
const isOpen = ref(true);

const sortOptions: Array<{ label: string; value: ProductSort }> = [
  { label: 'قیمت: کم به زیاد', value: 'price-asc' },
  { label: 'قیمت: زیاد به کم', value: 'price-desc' },
];
</script>

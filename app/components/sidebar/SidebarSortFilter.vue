<script setup lang="ts">
import CardBox from '~/components/common/CardBox.vue';
import type { ProductSort } from '~~/types/product-filters.ts';

const modelValue = defineModel<ProductSort>({ required: true });
const isOpen = ref(true);

const sortOptions: Array<{ label: string; value: ProductSort }> = [
  { label: 'قیمت: کم به زیاد', value: 'price-asc' },
  { label: 'قیمت: زیاد به کم', value: 'price-desc' },
];
</script>

<template>
  <CardBox v-model="isOpen" title="مرتب سازی">
    <div class="mt-6 flex flex-col gap-4">
      <label
        v-for="option in sortOptions"
        :key="option.value"
        class="flex cursor-pointer items-center gap-3"
      >
        <span
          class="text-xs transition-colors text-gray-500"
          :class="modelValue === option.value ? 'text-gray-800' : 'text-gray-500'"
          >{{ option.label }}</span
        >

        <div
          class="relative flex size-4 items-center justify-center rounded-full border-2 transition"
          :class="modelValue === option.value ? 'border-pink-600' : 'border-slate-300'"
        >
          <div v-if="modelValue === option.value" class="size-2 rounded-full bg-pink-600"></div>

          <input v-model="modelValue" type="radio" :value="option.value" class="hidden" />
        </div>
      </label>
    </div>
  </CardBox>
</template>

<script setup lang="ts">
import CardBox from '~/components/common/CardBox.vue';
import type { ProductsCategories } from '~~/types/product.ts';

const selectedCategories = defineModel<string[]>({ default: () => [] });

const isOpen = ref(true);

defineProps<{
  categoryOptions: ProductsCategories;
}>();
</script>

<template>
  <CardBox v-model="isOpen" title="دسته بندی">
    <div class="mt-6 flex flex-col gap-4">
      <label
        v-for="category in categoryOptions"
        :key="category.value"
        class="flex cursor-pointer items-center justify-between"
      >
        <span class="flex items-center gap-3">
          <span
            class="flex size-4 items-center justify-center rounded-[4px] border-2 transition-colors"
            :class="
              selectedCategories.includes(category.value)
                ? 'border-pink-600 bg-pink-600'
                : 'border-slate-300 bg-white'
            "
          >
            <svg
              v-if="selectedCategories.includes(category.value)"
              class="size-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12.5L9.5 17L19 7"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <span
            class="text-xs transition-colors"
            :class="selectedCategories.includes(category.value) ? 'text-gray-800' : 'text-gray-500'"
          >
            {{ category.label }}
          </span>

          <input
            v-model="selectedCategories"
            type="checkbox"
            :value="category.value"
            class="peer sr-only"
          />
        </span>

        <span
          class="flex size-5 items-center justify-center rounded-[4px] text-xs text-white transition-colors"
          :class="selectedCategories.includes(category.value) ? 'bg-pink-600' : 'bg-slate-950'"
        >
          {{ category.count }}
        </span>
      </label>
    </div>
  </CardBox>
</template>

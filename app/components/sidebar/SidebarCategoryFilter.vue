<template>
  <section class="rounded-[12px] bg-white px-6 py-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      class="flex w-full items-center justify-between text-slate-600"
      @click="isOpen = !isOpen"
    >
      <span class="text-base font-bold text-slate-700">دسته بندی</span>

      <svg
        class="size-6 transition-transform duration-300"
        :class="{ 'rotate-180': !isOpen }"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>

    <div v-show="isOpen" class="mt-6 flex flex-col gap-6">
      <label
        v-for="category in categories"
        :key="category.id"
        class="flex cursor-pointer items-center justify-between"
      >
        <span class="flex items-center gap-3">
          <span
            class="flex size-4 items-center justify-center rounded-[4px] border-2 transition-colors"
            :class="
              selectedCategories.includes(category.id)
                ? 'border-pink-600 bg-pink-600'
                : 'border-slate-300 bg-white'
            "
          >
            <svg
              v-if="selectedCategories.includes(category.id)"
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
            class="text-xs font-medium transition-colors"
            :class="selectedCategories.includes(category.id) ? 'text-slate-700' : 'text-slate-400'"
          >
            {{ category.title }}
          </span>

          <input
            v-model="selectedCategories"
            type="checkbox"
            :value="category.id"
            class="peer sr-only"
          />
        </span>

        <span
          class="flex size-5 items-center justify-center rounded-[4px] text-xs text-white transition-colors"
          :class="selectedCategories.includes(category.id) ? 'bg-pink-600' : 'bg-slate-950'"
        >
          {{ category.count }}
        </span>
      </label>
    </div>
  </section>
</template>

<script setup lang="ts">
const selectedCategories = defineModel<string[]>({ default: () => [] });

const isOpen = ref(true);

const categories = [
  {
    id: 'electronics',
    title: 'الکترونیک',
  },
  {
    id: 'jewelery',
    title: 'جواهرات',
  },
  {
    id: "men's clothing",
    title: 'پوشاک مردانه',
  },
  {
    id: "women's clothing",
    title: 'پوشاک زنانه',
  },
];
</script>

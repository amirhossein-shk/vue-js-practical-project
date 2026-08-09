<template>
  <section
    v-if="activeItems.length"
    class="flex min-h-16 w-full flex-wrap items-center justify-between gap-4 rounded-[12px] bg-white px-6 py-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)]"
  >
    <span class="text-sm font-bold text-slate-700">فیلترهای اعمال شده</span>

    <div class="flex flex-wrap items-center gap-3">
      <div
        v-for="item in activeItems"
        :key="item.key"
        class="flex h-10 items-center gap-2 rounded-full bg-pink-50 px-4 text-sm font-bold text-slate-700 transition hover:bg-pink-100 select-none"
      >
        <svg
          v-if="item.type === 'sort'"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.19329 9.52667L3.99996 9.72667V4.66667C3.99996 4.48986 3.92972 4.32029 3.8047 4.19526C3.67967 4.07024 3.51011 4 3.33329 4C3.15648 4 2.98691 4.07024 2.86189 4.19526C2.73687 4.32029 2.66663 4.48986 2.66663 4.66667V9.72667L2.47329 9.52667C2.34776 9.40113 2.1775 9.33061 1.99996 9.33061C1.82243 9.33061 1.65216 9.40113 1.52663 9.52667C1.40109 9.6522 1.33057 9.82247 1.33057 10C1.33057 10.1775 1.40109 10.3478 1.52663 10.4733L2.85996 11.8067C2.92336 11.8674 2.99813 11.9149 3.07996 11.9467C3.15976 11.9819 3.24605 12.0002 3.33329 12.0002C3.42054 12.0002 3.50683 11.9819 3.58663 11.9467C3.66846 11.9149 3.74322 11.8674 3.80663 11.8067L5.13996 10.4733C5.20212 10.4112 5.25143 10.3374 5.28507 10.2562C5.31871 10.175 5.33602 10.0879 5.33602 10C5.33602 9.91209 5.31871 9.82505 5.28507 9.74383C5.25143 9.66262 5.20212 9.58883 5.13996 9.52667C5.0778 9.46451 5.00401 9.4152 4.92279 9.38156C4.84158 9.34792 4.75453 9.33061 4.66663 9.33061C4.57872 9.33061 4.49168 9.34792 4.41046 9.38156C4.32925 9.4152 4.25545 9.46451 4.19329 9.52667V9.52667ZM7.33329 5.33333H14C14.1768 5.33333 14.3463 5.2631 14.4714 5.13807C14.5964 5.01305 14.6666 4.84348 14.6666 4.66667C14.6666 4.48986 14.5964 4.32029 14.4714 4.19526C14.3463 4.07024 14.1768 4 14 4H7.33329C7.15648 4 6.98691 4.07024 6.86189 4.19526C6.73686 4.32029 6.66663 4.48986 6.66663 4.66667C6.66663 4.84348 6.73686 5.01305 6.86189 5.13807C6.98691 5.2631 7.15648 5.33333 7.33329 5.33333V5.33333ZM14 7.33333H7.33329C7.15648 7.33333 6.98691 7.40357 6.86189 7.5286C6.73686 7.65362 6.66663 7.82319 6.66663 8C6.66663 8.17681 6.73686 8.34638 6.86189 8.4714C6.98691 8.59643 7.15648 8.66667 7.33329 8.66667H14C14.1768 8.66667 14.3463 8.59643 14.4714 8.4714C14.5964 8.34638 14.6666 8.17681 14.6666 8C14.6666 7.82319 14.5964 7.65362 14.4714 7.5286C14.3463 7.40357 14.1768 7.33333 14 7.33333ZM14 10.6667H7.33329C7.15648 10.6667 6.98691 10.7369 6.86189 10.8619C6.73686 10.987 6.66663 11.1565 6.66663 11.3333C6.66663 11.5101 6.73686 11.6797 6.86189 11.8047C6.98691 11.9298 7.15648 12 7.33329 12H14C14.1768 12 14.3463 11.9298 14.4714 11.8047C14.5964 11.6797 14.6666 11.5101 14.6666 11.3333C14.6666 11.1565 14.5964 10.987 14.4714 10.8619C14.3463 10.7369 14.1768 10.6667 14 10.6667Z"
            fill="#0A2A51"
          />
        </svg>
        <svg
          v-if="item.type === 'search'"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.4733 13.5267L11.9999 11.0733C12.96 9.87627 13.4249 8.35686 13.2991 6.82753C13.1733 5.2982 12.4664 3.87519 11.3236 2.85109C10.1808 1.827 8.68914 1.27967 7.15522 1.32164C5.62129 1.36362 4.16175 1.99171 3.0767 3.07676C1.99164 4.16181 1.36356 5.62136 1.32158 7.15528C1.27961 8.6892 1.82694 10.1809 2.85103 11.3237C3.87512 12.4664 5.29814 13.1734 6.82747 13.2992C8.3568 13.425 9.87621 12.9601 11.0733 12L13.5266 14.4533C13.5886 14.5158 13.6623 14.5654 13.7436 14.5993C13.8248 14.6331 13.9119 14.6505 13.9999 14.6505C14.0879 14.6505 14.1751 14.6331 14.2563 14.5993C14.3376 14.5654 14.4113 14.5158 14.4733 14.4533C14.5934 14.329 14.6606 14.1629 14.6606 13.99C14.6606 13.8171 14.5934 13.651 14.4733 13.5267ZM7.33327 12C6.41029 12 5.50804 11.7263 4.74061 11.2135C3.97318 10.7007 3.37504 9.97191 3.02183 9.11919C2.66862 8.26646 2.57621 7.32815 2.75627 6.42291C2.93634 5.51766 3.38079 4.68614 4.03344 4.0335C4.68608 3.38085 5.5176 2.9364 6.42285 2.75633C7.32809 2.57627 8.2664 2.66868 9.11913 3.02189C9.97185 3.3751 10.7007 3.97324 11.2135 4.74067C11.7262 5.5081 11.9999 6.41035 11.9999 7.33333C11.9999 8.57101 11.5083 9.75799 10.6331 10.6332C9.75793 11.5083 8.57095 12 7.33327 12Z"
            fill="#0A2A51"
          />
        </svg>

        <span>{{ item.label }}</span>
        <button>
          <svg
            class="size-4 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
            @click="removeFilter(item)"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  defaultProductFilters,
  type ProductFilters,
  type ProductSort,
} from '~~/types/product-filters.ts';

type ActiveFilterItem = {
  key: string;
  label: string;
  type: 'search' | 'sort' | 'category';
  value?: string;
};

const filters = defineModel<ProductFilters>({ required: true });

const sortLabels: Record<ProductSort, string> = {
  'price-asc': 'قیمت',
  'price-desc': 'قیمت',
};

const categoryLabels: Record<string, string> = {
  housing: 'مسکن و ساختمان',
  health: 'بهداشت و درمان',
  industrial: 'صنعتی و کارخانه',
};

const activeItems = computed<ActiveFilterItem[]>(() => {
  const items: ActiveFilterItem[] = [];

  if (filters.value.search) {
    items.push({
      key: 'search',
      label: filters.value.search,
      type: 'search',
    });
  }

  if (filters.value.sort !== defaultProductFilters.sort) {
    items.push({
      key: 'sort',
      label: sortLabels[filters.value.sort],
      type: 'sort',
    });
  }

  filters.value.categories.forEach((categoryId) => {
    items.push({
      key: `category-${categoryId}`,
      label: categoryLabels[categoryId] ?? categoryId,
      type: 'category',
      value: categoryId,
    });
  });

  return items;
});

const removeFilter = (item: ActiveFilterItem) => {
  if (item.type === 'search') {
    filters.value.search = '';
    return;
  }

  if (item.type === 'sort') {
    filters.value.sort = defaultProductFilters.sort;
    return;
  }

  if (item.type === 'category' && item.value) {
    filters.value.categories = filters.value.categories.filter(
      (categoryId) => categoryId !== item.value
    );
  }
};
</script>

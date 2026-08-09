<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: true });

defineProps<{
  title: string;
}>();
</script>

<template>
  <section class="rounded-[12px] bg-white p-5 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <button
      type="button"
      class="flex w-full items-center justify-between text-slate-700"
      @click="isOpen = !isOpen"
    >
      <span class="text-sm text-gray-700">{{ title }}</span>
      <svg
        class="size-5 transition-transform duration-300 stroke-gray-700"
        :class="{ 'rotate-180': isOpen }"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <div v-show="isOpen" class="mt-6">
      <slot />
    </div>
  </section>
</template>

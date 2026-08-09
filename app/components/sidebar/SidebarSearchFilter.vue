<template>
  <section class="rounded-[12px] bg-white px-5 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
    <h2 class="mb-5 text-right text-[18px] font-semibold text-slate-600">فیلتر و جستجو</h2>

    <form
      class="flex h-[40px] items-center rounded-[12px] border-[1px] border-pink-600 bg-slate-50 px-2"
      @submit.prevent="submitSearch"
    >
      <button
        type="submit"
        class="ml-2 flex size-6 shrink-0 items-center justify-center text-pink-600 transition hover:scale-105"
        aria-label="جستجو"
      >
        <svg
          class="size-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
      </button>

      <div class="h-6 w-px bg-slate-200" />

      <input
        v-model="draftSearch"
        type="text"
        placeholder="جستجو..."
        class="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-slate-800 outline-none placeholder:text-slate-400"
      />

      <button
        v-if="draftSearch"
        type="button"
        class="flex size-4 shrink-0 items-center justify-center text-slate-500 transition hover:text-pink-600"
        aria-label="پاک کردن جستجو"
        @click="clearDraft"
      >
        <span class="text-lg leading-none">×</span>
      </button>

      <div v-else class="size-4 shrink-0" />
    </form>

    <button
      type="button"
      class="mt-3 h-[40px] w-full rounded-[12px] bg-[#E20054] text-sm text-white transition hover:bg-pink-800 active:scale-[0.99]"
      @click="submitSearch"
    >
      جستجو
    </button>
  </section>
</template>

<script setup lang="ts">
const appliedSearch = defineModel<string>({ required: true });

// فقط برای تایپ در input (تا زمان submit)
const draftSearch = ref(appliedSearch.value);

// اگر از بیرون مدل تغییر کرد (مثلا از ActiveFilters حذف شد)، input هم sync بشه
watch(appliedSearch, (value) => {
  draftSearch.value = value;
});

const submitSearch = () => {
  appliedSearch.value = draftSearch.value.trim();
};

const clearDraft = () => {
  draftSearch.value = '';
};
</script>

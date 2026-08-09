<template>
  <div dir="rtl" class="min-h-screen bg-slate-50 font-sans text-slate-900">
    <AppHeader />

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '~/components/layout/AppHeader.vue';
</script>

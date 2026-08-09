<template>
  <div dir="rtl" class="min-h-screen bg-slate-50 font-sans text-slate-900">
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppFooter from '~/components/layout/AppFooter.vue';
import AppHeader from '~/components/layout/AppHeader.vue';
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-slate-100 bg-white shadow-sm">
    <div
      class="mx-auto flex h-20 max-w-[1520px] items-center justify-between px-4 sm:px-6 lg:px-10"
    >
      <div class="flex items-center gap-8">
        <NuxtLink to="/" class="text-xl font-bold text-pink-600">Logo</NuxtLink>

        <nav class="hidden gap-6 lg:flex">
          <NuxtLink
            to="/products"
            class="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >لیست محصولات</NuxtLink
          >
          <NuxtLink
            to="/consulting"
            class="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >دریافت مشاوره</NuxtLink
          >
          <NuxtLink
            to="/faq"
            class="text-sm font-medium text-slate-600 transition hover:text-pink-600"
            >سوالات متداول</NuxtLink
          >
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="hidden items-center gap-2 text-sm text-slate-600 md:flex">
          <span class="font-medium">تماس با ما</span>
          <svg class="h-5 w-5 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </div>

        <button
          class="flex h-11 items-center justify-center rounded-full bg-pink-600 px-6 text-sm font-semibold text-white transition hover:bg-pink-700"
        >
          تماس
        </button>
      </div>
    </div>
  </header>
</template>

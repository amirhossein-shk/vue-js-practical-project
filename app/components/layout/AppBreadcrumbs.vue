<script setup lang="ts">
type BreadcrumbItem = {
  label: string;
  to: string;
  isCurrent: boolean;
};

const props = withDefaults(
  defineProps<{
    homeLabel?: string;
    homeTo?: string;
    showHome?: boolean;
    hideCurrent?: boolean;
    currentLabel?: string;
    toMap?: Record<string, string>;
    labels?: Record<string, string>;
  }>(),
  {
    homeLabel: 'خانه',
    homeTo: '/',
    showHome: true,
    hideCurrent: false,
    currentLabel: '',
    toMap: () => ({}),
    labels: () => ({}),
  }
);

const route = useRoute();

function normalizeSegment(segment: string) {
  return decodeURIComponent(segment).replace(/-/g, ' ').replace(/_/g, ' ').trim();
}

function resolveLabel(segment: string, to: string, isCurrent: boolean) {
  if (props.labels[to]) return props.labels[to];
  if (props.labels[segment]) return props.labels[segment];

  const metaBreadcrumb = route.meta.breadcrumb;

  if (isCurrent && typeof metaBreadcrumb === 'string') {
    return metaBreadcrumb;
  }

  if (isCurrent && props.currentLabel) {
    return props.currentLabel;
  }

  return normalizeSegment(segment);
}

const breadcrumbs = computed<BreadcrumbItem[]>(() => {
  const path = route.path.split('?')[0] || '/';
  const segments = path.split('/').filter(Boolean);

  const items: BreadcrumbItem[] = [];

  if (props.showHome) {
    items.push({
      label: props.homeLabel,
      to: props.homeTo,
      isCurrent: segments.length === 0,
    });
  }

  segments.forEach((segment, index) => {
    const rawTo = `/${segments.slice(0, index + 1).join('/')}`;
    const to = props.toMap?.[rawTo] || rawTo;
    const isCurrent = index === segments.length - 1;

    if (props.hideCurrent && isCurrent) return;

    items.push({
      label: resolveLabel(segment, to, isCurrent),
      to,
      isCurrent,
    });
  });

  return items;
});
</script>

<template>
  <nav v-if="breadcrumbs.length > 1" aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
    <ol class="flex flex-wrap items-center gap-2">
      <li v-for="(item, index) in breadcrumbs" :key="item.to" class="flex items-center gap-2">
        <NuxtLink
          v-if="!item.isCurrent"
          :to="item.to"
          class="transition-colors hover:text-slate-900"
        >
          <template v-if="index === 0 && props.showHome">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55246 2.11501L2.35496 6.2775C1.76996 6.7425 1.39495 7.72502 1.52245 8.46002L2.51996 14.43C2.69996 15.495 3.71995 16.3575 4.79995 16.3575H13.2C14.2725 16.3575 15.3 15.4875 15.48 14.43L16.4775 8.46002C16.5975 7.72502 16.2225 6.7425 15.645 6.2775L10.4474 2.12251C9.64495 1.47751 8.34746 1.47751 7.55246 2.11501Z"
                stroke="#6783A0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11.625C10.0355 11.625 10.875 10.7855 10.875 9.75C10.875 8.71447 10.0355 7.875 9 7.875C7.96447 7.875 7.125 8.71447 7.125 9.75C7.125 10.7855 7.96447 11.625 9 11.625Z"
                stroke="#6783A0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="sr-only">{{ item.label }}</span>
          </template>

          <template v-else>
            {{ item.label }}
          </template>
        </NuxtLink>

        <span v-else class="font-medium text-slate-900" aria-current="page">
          {{ item.label }}
        </span>

        <span v-if="index < breadcrumbs.length - 1" class="text-slate-300" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9772_605)">
              <path
                d="M9.37685 9.64643C9.18158 9.8417 9.18158 10.1583 9.37685 10.3535L12.5591 13.5358C12.8845 13.8612 12.8845 14.3888 12.5591 14.7142C12.2337 15.0395 11.7062 15.0395 11.3808 14.7142L7.02018 10.3535C6.82492 10.1583 6.82492 9.8417 7.02018 9.64643L11.3808 5.28582C11.7062 4.96043 12.2337 4.96043 12.5591 5.28582C12.8845 5.61121 12.8845 6.13877 12.5591 6.46416L9.37685 9.64643Z"
                fill="#6783A0"
              />
            </g>
            <defs>
              <clipPath id="clip0_9772_605">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </li>
    </ol>
  </nav>
</template>

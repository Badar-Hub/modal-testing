<template>
  <q-expansion-item
    :icon="
      icon.includes('rhc')
        ? `svguse:http://localhost:8080/icons.svg#${icon}`
        : icon
    "
    v-bind="$attrs"
  >
    <q-card>
      <q-card-section class="q-px-none q-py-sm">
        <slot></slot>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

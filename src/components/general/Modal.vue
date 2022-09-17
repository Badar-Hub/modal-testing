<template>
  <q-dialog v-bind="$attrs">
    <q-card
      :class="!dense ? 'q-pa-md' : ''"
      :style="`max-width: ${width ? width : '700px'}; width: 100%;`"
    >
      <div
        v-if="title && title.length"
        class="row justify-between q-px-md q-py-sm"
      >
        <h6 class="q-my-sm">{{ title }}</h6>
        <q-icon
          v-close-popup
          size="sm"
          name="cancel"
          class="cursor-pointer q-my-auto"
        />
      </div>
      <slot></slot>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  width?: string;
  dense?: boolean;
}>();
</script>

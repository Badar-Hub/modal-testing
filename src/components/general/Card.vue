<template>
  <q-card>
    <q-card-section v-if="isHeader" class="q-pa-none">
      <slot name="header"></slot>
      <q-separator />
    </q-card-section>
    <q-card-section
      :style="
        isActionBtn
          ? 'max-height: calc(400px - 60px); height:100%'
          : 'max-height: 400px; height:100%; width:100%'
      "
      class="scroll q-pa-none"
    >
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps<{
  isHeader?: boolean;
  isActionBtn?: boolean;
}>();
</script>

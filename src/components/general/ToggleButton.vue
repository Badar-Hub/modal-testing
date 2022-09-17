<template>
  <div class="toggle-btn">
    <Icon
      :class="gridView ? 'bg-primary' : ''"
      :color="gridView ? 'white' : 'warning'"
      class="brdr q-pa-sm cursor-pointer"
      size="20px"
      name="rhc-grid"
      @click="gridView = true"
    />
    <Icon
      :class="gridView ? '' : 'bg-primary'"
      class="brdr q-pa-sm cursor-pointer"
      size="20px"
      :color="gridView ? 'warning' : 'white'"
      name="rhc-list"
      @click="gridView = false"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:model-value", val: boolean): void;
}>();

const gridView = computed({
  get() {
    return props.modelValue;
  },
  set(val: boolean) {
    emit("update:model-value", val);
  },
});
</script>

<style lang="scss">
.toggle-btn {
  border: 1px solid #c9c9c9;
}
</style>

<template>
  <q-file
    v-model="model"
    outlined
    class="my-file-input"
    standout
    v-bind="$attrs"
  >
    <span
      :class="textColor ? textColor : 'text-black'"
      class="cursor-pointer q-px-xs text-weight-bold"
    >
      Browse
    </span>
  </q-file>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: File;
  textColor: string;
}>();
const emit = defineEmits<{
  (e: "update:model-value", val: File): void;
}>();
const model = computed({
  get() {
    return props.modelValue;
  },
  set(val: File) {
    emit("update:model-value", val);
  },
});
</script>

<style lang="scss">
.my-file-input {
  width: auto;
  .q-field__control {
    padding: 0px !important;
    min-height: auto;
    border-radius: 5px;
    color: black;
  }
  .q-field__control:before {
    border: transparent;
  }
  .q-field__native {
    display: none;
  }
}
</style>

<template>
  <div class="q-pa-md">
    <q-list separator>
      <q-item v-for="(file, i) in files" :key="file.__key">
        <q-item-section thumbnail class="gt-xs">
          <Icon name="rhc-configuration" size="sm" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="full-width ellipsis">
            {{ file.name }}
          </q-item-label>

          <q-item-label caption>
            Size: {{ (file.size / (1024 * 1024)).toFixed(2) }} MB
          </q-item-label>
        </q-item-section>

        <q-item-section top side>
          <q-btn
            class="gt-xs"
            size="12px"
            flat
            dense
            round
            icon="delete"
            @click="removeFile(i)"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  files: FileList;
}>();
const emit = defineEmits<{
  (e: "remove-file", val: number): void;
  (e: "update:modelValue", val: FileList): void;
}>();
const removeFile = (i: number) => {
  emit("remove-file", i);
};
</script>

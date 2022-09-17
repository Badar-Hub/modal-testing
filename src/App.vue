<template>
  <Button @click="drawImageScaled">Load Image</Button>
  <canvas id="canvas" @click="getPosition"> </canvas>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { inferenceSqueezenet } from "@/utils/predict";

const canvas = ref();
const ctx = ref();

const img = new Image();
img.src =
  "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg";
const pointSize = 10;
const pointsArr = ref([]);

const init = () => {
  canvas.value = document.getElementById("canvas");
  canvas.value.width = window.innerWidth;
  canvas.value.height = window.innerHeight;
  ctx.value = canvas.value.getContext("2d");
};

function drawImageScaled() {
  const hRatio = canvas.value.width / img.width;
  const vRatio = canvas.value.height / img.height;
  const ratio = Math.min(hRatio, vRatio);
  const centerShift_x = (canvas.value.width - img.width * ratio) / 2;
  const centerShift_y = (canvas.value.height - img.height * ratio) / 2;
  ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  ctx.value.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}

function getPosition(event) {
  const rect = canvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  drawCoordinates(x, y);
}

function drawCoordinates(x, y) {
  ctx.value.fillStyle = "#ff2626"; // Red color
  ctx.value.beginPath();
  pointsArr.value.push({ x, y });
  ctx.value.arc(x, y, pointSize, 0, Math.PI * 2, true);
  if (pointsArr.value.length === 4) {
    generateRandomCoordinates(x, y);
  }
  ctx.value.fill();
}

async function generateRandomCoordinates(x, y) {
  ctx.value.arc(x + 100, y + 100, pointSize, 0, Math.PI * 2, true);
  ctx.value.arc(x + 120, y + 120, pointSize, 0, Math.PI * 2, true);
  ctx.value.arc(x + 140, y + 140, pointSize, 0, Math.PI * 2, true);
  ctx.value.arc(x + 160, y + 160, pointSize, 0, Math.PI * 2, true);
  ctx.value.arc(x + 180, y + 180, pointSize, 0, Math.PI * 2, true);
  ctx.value.arc(x + 200, y + 200, pointSize, 0, Math.PI * 2, true);
  const data = await inferenceSqueezenet("/dog.jpeg");
  console.log(data, "From On Mounted");
}

onMounted(() => {
  init();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <canvas>
    <div id="square"></div>
  </canvas>
</template>
<script>
export default {
  name: "my-canvas"
};

const mainContent = document.querySelector("#square");
</script>

<style>
canvas {
  border: solid white;
}
</style>

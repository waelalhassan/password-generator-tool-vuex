<template>
  <div id="app">
    <div class="passGen">
      <pass-generator />
    </div>
  </div>
</template>
<script>
import passGenerator from "./components/passGenerator"

export default {
  name: "app",
  components: {
    "pass-generator": passGenerator
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #fafafa;
    line-height: 1.6;
    overflow: hidden;
    font-family: 'PT Sans', sans-serif;
  }
</style>

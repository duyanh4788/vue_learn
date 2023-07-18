<template>
  <div>
    <headers title="List Course"></headers>
    <the-resource></the-resource>
  </div>
</template>

<script>
import Headers from './Layouts/headers/Headers.vue';
import TheResource from './pages/the-resource/TheResource.vue';
export default {
  components: {
    Headers,
    TheResource,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}
body {
  margin: 0 !important;
}
</style>

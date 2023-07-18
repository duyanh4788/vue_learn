<template>
  <ul>
    <learning-resource
      v-for="item of resources"
      :key="item.id"
      :resource="item"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from '../learning-resource/LearningResource.vue';
export default {
  inject: ['resources'],
  components: {
    LearningResource,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>

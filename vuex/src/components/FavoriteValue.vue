<template>
  <h3>{{ counted }}</h3>
  <p>We do more....</p>
</template>

<script>
export default {
  computed: {
    counted() {
      return this.$store.getters['counter/normalizedCounter'];
    },
  },
};
</script>

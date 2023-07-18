<template>
  <h2>{{ finalCounter }}</h2>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counted() {
    //   return this.$store.getters['counter/finalCounter'];
    // },
    ...mapGetters('counter', ['finalCounter']),
  },
};
</script>

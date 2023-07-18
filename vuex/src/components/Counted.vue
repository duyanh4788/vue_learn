<template>
  <button @click="inc">add 1</button>
  <button @click="increase({ value: 10 })">add 10</button>
  <p>-------------------------</p>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.commit('increase', { value: 10 });
    //   this.$store.dispatch({ type: 'increase', value: 10 });
    // },
    // ...mapActions(['increment', 'increase']),
    ...mapActions('counter', {
      inc: 'increment',
      increase: 'increase',
    }),
  },
};
</script>

<template>
  <button v-if="!isAuth" @click="login(true)">login</button>
  <button v-if="isAuth" @click="logout(false)">logout</button>
</template>

<script>
// import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    login(value) {
      this.$store.dispatch({ type: 'auth/login', value });
    },
    logout(value) {
      this.$store.dispatch({ type: 'auth/logout', value });
    },
    // ...mapActions(['login', 'logout']),
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/useIsAuth'];
    },
  },
};
</script>

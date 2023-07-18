<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <counted></counted>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth"> <user-auth></user-auth></base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import Counted from './components/Counted.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    Counted,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/useIsAuth'];
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-right: 10px;
}
</style>

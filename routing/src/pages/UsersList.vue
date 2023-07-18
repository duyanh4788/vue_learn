<template>
  <button @click="doSomeThing()">confirm</button>
  <button @click="handleLeavePage">save</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return { isDo: false, leavePage: false };
  },
  methods: {
    doSomeThing() {
      this.isDo = true;
    },
    handleLeavePage() {
      this.leavePage = true;
    },
  },
  beforeRouteEnter(to, form, next) {
    // next({ name: 'team-members', params: { teamId: 't1' } });
    next(true);
  },
  watch: {
    isDo() {
      if (this.isDo) {
        setTimeout(() => {
          this.$router.push('/teams');
        }, 3000);
      }
    },
  },
  beforeRouteLeave(to, form, next) {
    console.log(to);
    console.log(form);
    if (this.leavePage) {
      next();
    } else {
      const noti = confirm('are you want leave');
      next(noti);
    }
  },
  unmounted() {
    console.log('unmounted');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>

<template>
  <transition-group tag="ul" name="users-list">
    <li v-for="item of users" :key="item" @click="remove(item)">
      {{ item }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="name" />
    <button @click="add">add</button>
  </div>
</template>
<script>
export default {
  data() {
    return { users: ['Max', 'Min', 'Test', 'Vue', 'NodeJs'] };
  },
  methods: {
    remove(id) {
      this.users = this.users.filter((item) => item !== id);
    },

    add() {
      this.users.unshift(`${this.$refs.name.value + Date.now()}`);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
}

.users-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.users-list-enter-active {
  transition: all 1s ease-out;
}
.users-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.users-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.users-list-leave-active {
  transition: all 0.5s ease-in;
}
.users-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.users-list-move {
  transition: transform 1s ease;
}
</style>

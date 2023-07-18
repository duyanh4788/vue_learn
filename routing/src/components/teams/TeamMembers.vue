<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams">Back</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users', 'teams'],
  props: {
    teamId: {
      type: String,
      required: true,
    },
  },
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: [],
    };
  },
  methods: {
    loadTeamMember(teamId) {
      if (!teamId) return this.$router.push('/teams');
      const findTeam = this.teams.find((item) => item.id === teamId);
      if (!findTeam) return this.$router.push('/teams');
      this.teamName = findTeam.name;
      const selectMember = [];
      findTeam.members.forEach((item) => {
        const findMember = this.users.find((f) => f.id === item);
        if (findMember) {
          selectMember.push(findMember);
        }
      });
      this.members = selectMember;
    },
  },
  created() {
    this.loadTeamMember(this.teamId);
  },
  beforeRouteUpdate(to, form, next) {
    console.log('Teammember update router');
    console.log(to);
    console.log(form);
    next();
  },
  watch: {
    teamId(newTeamId) {
      this.loadTeamMember(newTeamId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

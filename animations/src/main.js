import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';
import App from './App.vue';
import BaseModal from './components/BaseModal.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/course-goals', component: CourseGoals },
  ],
});

const app = createApp(App);

app.component('base-modal', BaseModal);

app.use(router);

router
  .isReady()
  .then(() => {
    console.log('ok');
    app.mount('#app');
  })
  .catch((err) => {
    console.log(err);
  });

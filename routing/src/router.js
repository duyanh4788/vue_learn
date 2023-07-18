import { createRouter, createWebHistory } from 'vue-router';
import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UserFooter from './pages/UserFooter.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
    {
      name: 'teams',
      path: '/teams',
      meta: { authentica: true },
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      //   alias: '/',
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      meta: { authentica: false },
      components: {
        default: UsersList,
        footer: UserFooter,
      },
      beforeEnter(_1, _2, next) {
        next();
      },
    },
  ],
  scrollBehavior(_1, _2, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
});

router.beforeEach((to, form, next) => {
  console.log(to);
  if (to.meta.authentica) {
    console.log('verify');
    next(true);
  } else {
    alert('not valid!');
    next(false);
  }
  //   if (to.name === 'team-members') {
  //     next(true);
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't1' } });
  //   }
});

// router.afterEach((to, form) => {
//   console.log(to);
//   console.log(form);
// });

export default router;

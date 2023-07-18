import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './Layouts/base-card/BaseCard.vue';
import BaseButton from './Layouts/base-button/BaseButton.vue';
import BaseDialog from './Layouts/base-dialog/BaseDialog.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/login.vue';
import Lists from '../views/call.vue';
import Option from '../views/option.vue';
import ContactDetail from '../views/contactdetail.vue';
import ContactEdit from '../views/contactedit.vue';
import sessionDetail from '../views/sessionDetail.vue';
import Chat from '../views/chat.vue';
import Sessions from '../views/sessions.vue';
import Message from '../views/message.vue';
import AddContact from '../views/addcontact.vue';
import Contact from '../views/contact.vue';
import ContactToJoin from '../views/contacttocall.vue';
import History1 from '../views/history.vue';

Vue.use (VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/lists', component: Lists},
  {path: '/option', component: Option},
  {path: '/contactdetail', component: ContactDetail},
  {path: '/contactedit', component: ContactEdit},
  {path: '/contacttocall', component: ContactToJoin},
  {path: '/message', component: Message},
  {path: '/chat', component: Chat},
  {path: '/sessions', component: Sessions},
  {path: '/sessiondetail', component: sessionDetail},
  {path: '/contact', component: Contact},
  {path: '/addcontact', component: AddContact},
  {path: '/history', component: History1},
];

const router = new VueRouter ({routes});

export default router;

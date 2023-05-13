import { createApp } from "vue";
import App from "./App.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Posts from "./pages/Posts.vue";
import Article from './pages/Article.vue'
import store from './store/index'
import Counter from './pages/Counter.vue'
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/posts/:id', component: Posts },
  { path: '/article/:id', component: Article, props:true},
  { path: '/counter', component: Counter},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

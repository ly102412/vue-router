import Vue from "vue";
import vueRouter from "vue-router";
import about from "../components/about.vue";
import home from "../components/home.vue";
import news from "../components/news.vue";
import message from "../components/message.vue";
import messageDetail from "../components/message-detail.vue";

Vue.use(vueRouter);

export default new vueRouter ({
  linkActiveClass: 'active',
  routes: [
    {
      path: "/about",
      component: about
    },
    {
      path: "/home",
      component: home,
      children: [
        {
          path: 'news',
          component: news
        },
        {
          path: 'message',
          component: message,
          children: [
            {
              path: 'detail/:id',
              component: messageDetail
            }
          ]
        }
      ]
    },
    {
      path: "/",
      redirect: "/about"
    }
  ]
})

import { createApp } from "vue";
import { Swipe, SwipeItem, Image } from "vant";
import BScroll from "@better-scroll/core";
import "vant/lib/index.css";
import router from "./router";
import App from "./App.vue";

createApp(App)
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(Image)
  .use(BScroll)
  .mount("#app");

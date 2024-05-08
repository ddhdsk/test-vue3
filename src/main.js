import { createApp } from "vue";
import { Swipe, SwipeItem, Image } from "vant";
import "vant/lib/index.css";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import App from "./App.vue";
import { Icon } from "@iconify/vue";
import "./style.css";
import Button from "./components/Button.vue";
import Input from "./components/Input.vue";

const app = createApp(App);
app.component("Icon", Icon);
app.component("co-button", Button);
app.component("co-input", Input);
app
  .use(router)
  .use(Swipe)
  .use(SwipeItem)
  .use(Image)
  .use(ElementPlus)
  .mount("#app");

import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import tooltip from "./plugins/tooltip";
import "@/assets/style.scss";
import store from "./store/store";

const app = createApp(App).use(store);

app.use(tooltip);
app.use(router);
app.mount("#app");

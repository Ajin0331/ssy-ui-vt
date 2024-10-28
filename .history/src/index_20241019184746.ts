import { createApp } from "vue/dist/vue.esm-browser";
import BTNUI from "./entry";

createApp({
  template: `
    <div>
      <SButton>普通按钮</SButton>
    </div>
  `,
})
  .use(BTNUI)
  .mount("#app");

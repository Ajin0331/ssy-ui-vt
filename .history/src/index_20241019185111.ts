import { createApp } from "vue/dist/vue.esm-browser";
import BTNUI from "./entry";

createApp({
  template: `
    <div>
      <SButton color="blue">主要按钮</SButton>
      <SButton color="green">绿色按钮</SButton>
      <SButton color="gray">灰色按钮</SButton>
      <SButton color="yellow">黄色按钮</SButton>
      <SButton color="red">红色按钮</SButton>
    </div>
  `,
})
  .use(BTNUI)
  .mount("#app");

import { createApp } from 'vue/dist/vue.esm-browser'
import SSYUI from './entry'

createApp({
  template: `
    <div style="margin-bottom:20px;">
        <SButton color="blue">主要按钮</SButton>
        <SButton color="green">绿色按钮</SButton>
        <SButton color="gray">灰色按钮</SButton>
        <SButton color="yellow">黄色按钮</SButton>
        <SButton color="red">红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
        <SButton color="blue" plain>朴素按钮</SButton>
        <SButton color="green" plain>绿色按钮</SButton>
        <SButton color="gray" plain>灰色按钮</SButton>
        <SButton color="yellow" plain>黄色按钮</SButton>
        <SButton color="red" plain>红色按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
        <SButton size="small" plain>小按钮</SButton>
        <SButton size="medium" plain>中按钮</SButton>
        <SButton size="large" plain>大按钮</SButton>
    </div>
    <div style="margin-bottom:20px;">
        <SButton color="blue" round plain>搜索按钮</SButton>
        <SButton color="green" round plain>编辑按钮</SButton>
        <SButton color="gray" round plain>成功按钮</SButton>
        <SButton color="yellow" round plain>提示按钮</SButton>
        <SButton color="red" round plain>删除按钮</SButton>
    </div>
  `,
})
  .use(SSYUI)
  .mount('#app')

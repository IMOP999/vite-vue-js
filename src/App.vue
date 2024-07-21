<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>
  <main>
    <TheWelcome />
  </main> -->
  <el-config-provider :locale="locale">
    <!-- 使用 Button 组件 -->
    <d-button>确定</d-button>
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

// export default defineComponent({
//   components:{
//     ElConfigProvider,
//   },
//   setup() {
//     return { 
//       locale: zhCn,
//     }
//   }
// })
const locale = ref(zhCn)
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

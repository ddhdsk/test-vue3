<template>
  <router-view />
  <h1 @click="fn">msg: {{ msg }}</h1>
  <h1>{{ num }}</h1>
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <h2>{{ user.name }}&{{ user.age }}</h2>
</template>
<script>
import { ref, toRef, toRefs, onMounted, reactive } from "vue";
export default {
  // setup配置项 vue3独有！！
  // setup一方面是一个新生命周期(beforeCreate + created = setup)
  // setup另一方面是vue3 api的入口
  setup() {
    console.log("setup!");
    // 与data选项等价的API
    // vue3 API都是模块化的
    // vue3 API 基本上都是函数 createApp、ref
    const msg = ref("abc");
    const fn = () => console.log(msg.value);
    const count = ref(123);
    onMounted(() => console.log(count.value));
    const num = ref(0);
    const increaseCount = () => num.value++;
    const decreaseCount = () => num.value--;

    // xxx功能
    const user = reactive({ name: "simonhungchun", age: 18 });
    // 对reactive响应式数据直接解构会失去响应式 解决办法借助toRefs
    const { name, age } = toRefs(user);
    // const name = toRef(user, "name");
    // const age = toRef(user, "age");

    // 在setup模板语法中需要使用的变量就返回
    return { msg, fn, num, increaseCount, decreaseCount, user };
  },
  // // vue2 data
  // data() {
  //   return {
  //     msg: "abc",
  //     count: 123,
  //   };
  // },
  // // vue2 methods
  // methods: {
  //   fn() {
  //     console.log(this.msg);
  //   },
  // },
  // mounted() {
  //   console.log(this.count);
  // },
};
</script>

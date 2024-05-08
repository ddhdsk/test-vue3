<template>
  <div>{{ a }}</div>
  <co-button @click="updateA">update A</co-button>
</template>
<script>
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const a = ref(123);
    const updateA = () => a.value++;
    // watchEffect是不需要手动指定监听数据的
    // 自动判断需要监听谁！！
    const stopWatch = watchEffect(() => {
      console.log(a.value);
    });
    return { a, updateA, stopWatch };
  },
};
</script>

// 
<template>
  <!--vue3里可以没有根标签 -->
  <div id="root">
    <p>姓名:{{ name }}</p>
    <p>
      年龄:
      <button type="button" @click="chageAge(-1)">-</button>
      {{ age }}
      <button type="button" @click="chageAge(1)">+</button>
    </p>
    <!-- <p>出生年份:{{ 2021 - age }}</p> -->
    <p>
      出生年份:
      <button type="button" @click="chageYear(-1)">-</button>
      {{ year }}
      <button type="button" @click="chageYear(1)">+</button>
    </p>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  // data: function () {
  //   return {
  //     name: "陌陌",-
  //   };
  // },
  // 使用CompositionAPI-的入口,在beforeCreate之前调用,在setup中没有this
  setup() {
    const name = ref("陌陌"); //返回一个响应式引用,name是一个响应式对象
    const age = ref(18);
    function chageAge(val) {
      age.value += val;
    }
    function chageYear(val) {
      year.value = year.value + val;
    }
    const year = computed({
      get: () => {
        return 2021 - age.value;
      },
      set: (val) => {
        age.value = 2021 - val;
      },
    });
    return { name, age, chageAge, year, chageYear };
  },
};
</script>

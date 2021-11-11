<template>
  <!--vue3里可以没有根标签 -->
  <h1>姓名:{{ name }}</h1>
  <h1>年龄:{{ age }}</h1>
  <h1>性别:{{ sex }}</h1>
  <button @click="sayBai">小猪佩奇vue3</button>
  <button @click="sayGun">小猪佩奇vue2</button>
</template>

<script>
// import { h } from "vue";
export default {
  name: "App",
  data() {
    return {
      sex: "男",
    };
  },
  methods: {
    sayGun() {
      alert("vue2");
    },
  },

  setup() {
    //数据
    let name = "阿伟";
    let age = 18;
    function sayBai() {
      alert(`我叫${name},我${age}岁了,你好啊`);
    }
    //返回一个对象(常用)
    return {
      name,
      age,
      sayBai,
    };
    //返回一个函数(渲染函数)
    // return () => h("h1", "123");
  },
};
</script>
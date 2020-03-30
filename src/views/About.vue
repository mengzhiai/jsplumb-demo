<!--
 * @Author: your name
 * @Date: 2019-12-02 10:07:12
 * @LastEditTime : 2019-12-18 09:10:50
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\views\About.vue
 -->
<template>
<div>
  <el-button type="primary" @click="addObj">添加</el-button>
  <el-input-number v-model="count" @input="count=/^\d+\.?\d{0,2}$/.test(count)||count == '' ? count : count=''" label=""></el-input-number>

</div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: 'tom'
      },
      count: null,
      checkValue: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    checkKeydown(e, value){
            this.checkValue = value;
        },
    init() {
      /* 
        find为true时返回元素,为false时返回undefined
        findIndex找到返回当前数组的索引,找不到返回-1
      */
      let arr = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5];
      let val = arr.findIndex(item => item == 6)
      console.log(val);
    },
    addObj() {
      this.obj = Object.assign(this.obj, {
        age: 20
      }, {
        sex: 'nv'
      })
      console.log(this.obj);
    },
    oninput(e) {
      // 通过正则过滤小数点后两位
      e.target.value = (e.target.value.match(/^\d*(\.?\d{0,2})/g)[0]) || null

      console.log('e', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

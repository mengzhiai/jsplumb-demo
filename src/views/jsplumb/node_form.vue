<!--
 * @Author: your name
 * @Date: 2019-12-17 10:22:37
 * @LastEditTime : 2019-12-23 15:09:29
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\views\jsplumb\node_form.vue
 -->
<template>
<el-dialog title="节点信息" :close-on-click-modal="false" :visible.sync="visible" @close="closeDialog">
  <el-form :model="node" ref="dataForm" size="small" label-width="80px">
    <el-form-item label="名称">
      <el-input v-model="node.name"></el-input>
    </el-form-item>
    <el-form-item label="left坐标">
      <el-input v-model="node.left"></el-input>
    </el-form-item>
    <el-form-item label="top坐标">
      <el-input v-model="node.top"></el-input>
    </el-form-item>
    <!-- <el-form-item label="ico图标">
      <el-input v-model="node.ico"></el-input>
    </el-form-item> -->
    <el-form-item label="添加ip">
      <div class="add-list">
        <div>
          <el-input v-model="node.addIP" placeholder="请输入ip"></el-input>
        </div>
        <div>
          <el-input v-model="node.addIPName" placeholder="请输入ip对应的name"></el-input>
        </div>
        <div>
          <el-button type="primary" @click="addIP">添加</el-button>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="所有ip">
      <el-select v-model="node.children.name" placeholder="">
        <el-option v-for="(item,i) in node.children" :key="i" :label="item.name" :value="item.id">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="visible = false" icon="el-icon-close" size="small">取消</el-button>
    <el-button type="primary" icon="el-icon-check" @click="addData" size="small">确定</el-button>
  </span>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      node: {
        addIP: '',
        addIPName: ''
      },
      children: [

      ]
    }
  },
  methods: {
    /**
     * 表单修改，这里可以根据传入的ID进行业务信息获取
     * @param data
     * @param id
     */
    init(data, id) {
      this.visible = true;
      /* data.nodeList.filter((node) => {
        if (node.id === id) {
          this.node = node
          console.log(this.node);
        }
      }) */
      data.nodeList.forEach((node) => {
        if (node.id === id) {
          if (this.node.addIP == undefined) {
            this.node.addIP = ''
          }
          if (this.node.addIPName == undefined) {
            this.node.addIPName = ''
          }
          if (node.children == undefined) {
            node.children = []
          }
          this.node = node;
          console.log('get',this.node);
        }
      })
    },
    //添加ip
    addIP() {
      let obj = {
        ip: this.node.addIP,
        name: this.node.addIPName
      }
      this.node.children.push(obj);
      this.node = this.node
      console.log(this.node);
      // this.visible = false;
    },
    addData() {
      this.visible = false;
    },
    closeDialog(){
      this.node.addIP = ''
      this.node.addIPName = ''
    }
  }
}
</script>

<style lang="scss">
.add-list {
  display: flex;

  >div:nth-child(1),
  >div:nth-child(2) {
    width: 40%;
    margin-right: 10px;
  }
}
</style>

<template>
<div>
<el-dialog title="节点编辑" :visible.sync="nodeDialog" width="600px">
    <el-form :model="node" ref="dataForm" label-width="100px" class="flowEditForm margin13" size="mini">
        <el-form-item label="id">
            <el-input disabled v-model="node.id"></el-input>
        </el-form-item>
        <el-form-item label="名称">
            <el-input v-model="node.label"></el-input>
        </el-form-item>
        <el-form-item label="活动类型">
            <el-select v-model="node.Type" placeholder="请选择">
                <el-option v-for="item in TypeList" :key="item.Value" :label="item.Text" :value="item.Value">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="备注">
            <el-input v-model="node.Remark" type="textarea" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="default" @click="nodeDialog=false">取消</el-button>
            <el-button type="success" @click="saveNode">保存</el-button>
        </el-form-item>
    </el-form>
</el-dialog>
</div>
</template>

<script>
export default {
    name: 'editNode',
    data() {
        return {
            node: {},
            TypeList: [{
                Value: 1,
                Text: '开始'
            }, {
                Value: 2,
                Text: '结束'
            }, {
                Value: 3,
                Text: '逻辑判断'
            }, {
                Value: 4,
                Text: '输出'
            }],
            nodeDialog: false,
            data: {},
            id: ''
        }
    },
    methods: {
        init(data, id) {
            this.nodeDialog = false;
            this.data = data;
            this.dataId = id;
            data.nodeList.filter((node) => {
                if (node.id === id) {
                    this.node = node;
                }
            })
        },
        saveNode(){
            // this.nodeDialog = false;
        }
    }
}
</script>

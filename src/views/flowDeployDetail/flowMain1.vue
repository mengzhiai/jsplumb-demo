<!--
 * @Author: your name
 * @Date: 2020-01-02 11:25:16
 * @LastEditTime : 2020-01-02 13:43:14
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\views\flowDeployDetail\flowMain.vue
 -->
<template>
<div>
  <div class="flow-menuBox">
    <div class="flow-menu">
      <div class="menu-item" v-for="(item,i) in menueList" :key="i" draggable="true" @dragstart="drag(item)">
        <i class="iconfont" :class="item.icon"></i>
        <div>{{item.name}}</div>
      </div>
      <div class="menu-item" @click="isConnect=true">
        <i class="iconfont iconditulianxian"></i>
        <div>连线</div>
      </div>
      <div class="menu-item" @click="isConnect=false">
        <i class="iconfont icontubiaomoban-"></i>
        <div>选择</div>
      </div>
      <div class="menu-item">
        <div class="savebtn">
          <el-button type="primary" size="mini" @click="saveData()">保 存</el-button>
        </div>
      </div>
    </div>
  </div>
  <el-row>
    <el-col :span="24">
      <!-- <flowNode class="aaaaa"></flowNode> -->
      <div class="flow-detail">
        <div id="flowContent" ref="flowContent" @drop="drop($event)" @dragover="allowDrop($event)" @click="editFlow()" @dblclick="isConnect=false">
          <flowNode v-for="node in data.nodeList" :key="node.id" :node="node" :id="node.id" :isconnect="isConnect" @delete-node="deleteNode" @changeNodeSite="changeNodeSiteData" @edit-node="editNode">
          </flowNode>
        </div>
      </div>
    </el-col>
  </el-row>
  <div>
    <edit-flow ref="flowEdit" v-show="editType=='flow'"></edit-flow>
    <nodeEdit :componentNode="editNodeData" @refNode="refNodeData"></nodeEdit>
    <!-- <lineEdit></lineEdit> -->
    <lineEdit ref="lineForm" :compoentLine="lineData" v-show="editType=='line'" @line-save="lineLabelSave"></lineEdit>
  </div>
</div>
</template>

<script>
import flowNode from './flowNode'
/* import nodeEdit from './nodeEdit'
import lineEdit from './lineEdit'
import editFlow from './editFlow.vue' */
export default {
  components: {
    flowNode,
    /* nodeEdit,
    lineEdit,
    editFlow */
  },
  data() {
    return {
      flowId: "",
      num: 1,
      lineData: null,
      menueList: [{
          type: -1,
          name: '开始',
          icon: 'icontuoyuan1copy',
          nodeType: 'is-start'
        },
        {
          type: 1,
          name: '结束',
          icon: 'iconguanji',
          nodeType: 'is-end'
        },
        {
          type: 2,
          name: '状态',
          icon: 'iconchangfangxing',
          nodeType: 'is-state'
        }
      ],
      droppedItem: '',
      jsPlumb: null,
      // 默认设置参数
      jsplumbSetting: {
        // 动态锚点、位置自适应
        Anchors: ['Top', 'TopCenter', 'TopRight', 'TopLeft', 'Right', 'RightMiddle', 'Bottom', 'BottomCenter',
          'BottomRight', 'BottomLeft', 'Left', 'LeftMiddle'
        ],
        Container: 'flowContent',
        // 连线的样式 StateMachine、Flowchart,有四种默认类型：Bezier（贝塞尔曲线），Straight（直线），Flowchart（流程图），State machine（状态机）
        Connector: 'Flowchart',
        //这个是鼠标拉出来的线的属性
        ConnectionOverlays: [
          ["Label", {
            label: "",
            id: "label-1",
            cssClass: "csslabel"
          }]
        ],
        // 鼠标不能拖动删除线
        ConnectionsDetachable: false,
        // 删除线的时候节点不删除
        DeleteEndpointsOnDetach: false,
        // 连线的端点
        // Endpoint: ["Dot", {radius: 5}],
        Endpoint: ["Rectangle", {
          height: 10,
          width: 10
        }],
        // 线端点的样式
        EndpointStyle: {
          fill: 'rgba(255,255,255,0)',
          outlineWidth: 1
        },
        LogEnabled: true, //是否打开jsPlumb的内部日志记录
        // 绘制线
        PaintStyle: {
          stroke: '#409eff',
          strokeWidth: 2
        },
        // 绘制箭头
        Overlays: [
          ['Arrow', {
            width: 8,
            length: 8,
            location: 1
          }],
        ],
        RenderMode: "svg"
      },
      // jsplumb连接参数
      jsplumbConnectOptions: {
        isSource: true,
        isTarget: true,
        // 动态锚点、提供了4个方向 Continuous、AutoDefault
        anchor: "Continuous",
      },
      jsplumbSourceOptions: {
        filter: ".flow-node-drag", //触发连线的区域
        /*"span"表示标签，".className"表示类，"#id"表示元素id*/
        filterExclude: false,
        anchor: "Continuous",
        allowLoopback: false
      },
      jsplumbTargetOptions: {
        filter: ".flow-node-drag",
        /*"span"表示标签，".className"表示类，"#id"表示元素id*/
        filterExclude: false,
        anchor: "Continuous",
        allowLoopback: false
      },
      // 是否加载完毕
      loadEasyFlowFinish: false,
      // 数据
      data: {
        flowInfo: {
          Id: this.getUUID(),
          // Id: '',
          Name: '我的流程',
          Remark: '111',
        },
        nodeList: [],
        lineList: [],
      },
      currentItem: '', //临时存添加的元素
      isConnect: false, //判断是否连接
      timer: null, //定时器,判断单双击,
      currentConnect: '', //当前的连接线
      currentLine: '', //当前连接线数据
      editType: '', //编辑的类型,
      flowNodeContainer: {
        position: 'absolute',
      },
      editNodeData: {},
      flowId: '',

    };
  },
  created() {
    localStorage.setItem(
      "flowId",
      JSON.stringify("dd7ae013-b4a2-41a1-ac53-3ef899ca3c14")
    );
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let token = 'eyJhbGciOiJIUzUxMiJ9.eyJDcmVhdGVkVGltZSI6MTU3Nzk0MTYzNDUyOCwibmlrZU5hbWUiOiLotoXnuqfnrqHnkIblkZgiLCJleHAiOjE1Nzc5NDUyMzQsInVzZXJJZCI6InN1cGVyLWFkbWluIn0.U-ZLjecDKKV0Hvs7xCrzH7gSS8kYrSHZnOIyuNw3mvZ1N19vIFgfVPg1Gsu5JkARKLhtV997IH2jCHqXCGUe3w';
      this.flowId = localStorage.getItem("flowId");
      let data = {
        kid: this.flowId
      };
      this.axios({
          method: 'POST',
          url: '/api/sysFlow/getNodeListByQuery.do',
          data: data,
          headers: {
            jtoken: token
          }
        })
        .then(res => {
          if (!res.data.ok) {
            return;
          }
          let dataList = res.data.data;
          if (dataList.length == 0) {
            return;
          }
          let nodeList = [];
          dataList.forEach(item => {
            let obj = {};
            obj.label = item.name;
            obj.top = item.topPosition;
            obj.left = item.leftPosition;
            obj.isSign = item.isSign;
            obj.nodeType = item.nodeType;
            obj.type = item.type;
            obj.id = item.kid;
            nodeList.push(obj);
          });
          this.data.nodeList = nodeList;
        });
      this.axios({
          method: 'POST',
          url: '/api/sysFlow/getConnectionListByQuery.do',
          data: data,
          headers: {
            jtoken: token
          }
        })
        .then(res => {
          if (!res.data.ok) {
            return;
          }
          let data = res.data.data;
          if (data.length == 0) {
            return;
          }
          let lineList = [];
          data.forEach(item => {
            let obj = {};
            obj.id = item.kid;
            obj.from = item.nowNodeId;
            obj.to = item.nextNodeId;
            obj.label = item.conditions;
            lineList.push(obj);
          });
          console.log("lineList", lineList);
          this.data.lineList = lineList;
          this.jsPlumb = jsPlumb.getInstance();
          this.$nextTick(() => {
            this.inits();
          });
          this.editFlow();
        });
    },
    init() {
      const _this = this
      this.jsPlumb.ready(function () {

        // 导入默认配置
        _this.jsPlumb.importDefaults(_this.jsplumbSetting)
        // 会使整个jsPlumb立即重绘。
        _this.jsPlumb.setSuspendDrawing(false, true);
        // 初始化节点
        _this.loadEasyFlow()

        // 单点连接线（编辑label）,
        _this.jsPlumb.bind('dblclick', function (conn, originalEvent) {
          //clearTimeout(this.timer);
          //this.timer = setTimeout(function () { // 这里采用执行自定义事件的方式
          //    console.log("click", conn);
          //    _this.editLine(conn);
          //}, 300); // 延迟300ms执行单击事件,区分双击事件
          console.log("click", conn);
          _this.editLine(conn);
          console.log(conn.getOverlay("label-1"));
          //conn.getOverlay("label-1").setLabel('大肥肚'); //初始化label
        })
        // 双击连接线（删除）,
        _this.jsPlumb.bind('dblclick', function (conn, originalEvent) {
          clearTimeout(this.timer);
          console.log("dblclick", conn)
          /* console.log("dblclick", conn)

          _this.$confirm('确定删除所点击的线吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
          }).then(() => {
              _this.jsPlumb.deleteConnection(conn)
          }).catch(() => { }) */
          // this.$message.success("上个节点为" + conn.sourceId + ",下个节点为" + conn.targetId)
        })
        // 连线
        _this.jsPlumb.bind("connection", function (evt) {
          console.log('connection', evt)
          let from = evt.source.id
          let to = evt.target.id
          if (_this.loadEasyFlowFinish) {
            _this.data.lineList.push({
              from: from,
              to: to,
              label: '连线名称',
              id: _this.getUUID(),
              Remark: '',
            })
          };
          setTimeout(function () {
            _this.editLine(evt.connection);
          }, 100);
        })

        // 删除连线
        _this.jsPlumb.bind("connectionDetached", function (evt) {
          console.log('connectionDetached', evt)
          _this.deleteLine(evt.sourceId, evt.targetId)
        })

        // 改变线的连接节点
        _this.jsPlumb.bind("connectionMoved", function (evt) {
          console.log('connectionMoved', evt)
          _this.changeLine(evt.originalSourceId, evt.originalTargetId)
        })

        // 单击endpoint
        // jsPlumb.bind("endpointClick", function (evt) {
        //   console.log('endpointClick', evt)
        // })
        //
        // // 双击endpoint
        // jsPlumb.bind("endpointDblClick", function (evt) {
        //   console.log('endpointDblClick', evt)
        // })

        // contextmenu 右键
        _this.jsPlumb.bind("contextmenu", function (evt) {
          console.log('contextmenu', evt)
        })

        // beforeDrop
        _this.jsPlumb.bind("beforeDrop", function (evt) {
          console.log('beforeDrop', evt)
          let from = evt.sourceId
          let to = evt.targetId
          if (from === to) {
            _this.$message.error('不能连接自己');
            return false
          }
          if (_this.hasLine(from, to)) {
            _this.$message.error('不能重复连线');
            return false
          }
          if (_this.hashOppositeLine(from, to)) {
            _this.$message.error('不能回环哦');
            return false
          }
          return true
        })

        // beforeDetach
        _this.jsPlumb.bind("beforeDetach", function (evt) {
          console.log('beforeDetach', evt)
        })
      })

    },
    // 加载流程图
    loadEasyFlow() {

      // 初始化节点
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i]
        // 设置源点，可以拖出线连接其他节点
        this.jsPlumb.makeSource(node.id, this.jsplumbSourceOptions)
        // // 设置目标点，其他源点拖出的线可以连接该节点
        this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions)
        // jsPlumb.addEndpoint(node.id)
        // 设置可拖拽
        // jsPlumb.draggable(node.id, {
        //     containment: 'parent',
        //     grid: [10, 10]
        // })

        this.jsPlumb.draggable(node.id, {
          containment: 'parent'
        })

        // jsPlumb.draggable(node.id)
      }

      // 初始化连线
      console.log('this.data.lineList', this.data.lineList);
      // debugger
      for (var i = 0; i < this.data.lineList.length; i++) {
        let line = this.data.lineList[i]
        let connection = this.jsPlumb.connect({
          source: line.from,
          target: line.to,
        }, this.jsplumbConnectOptions);

        connection.getOverlay("label-1").setLabel(line.label); //初始化label
      }
      this.$nextTick(function () {
        this.loadEasyFlowFinish = true
      })
    },
    drag(item) {
      this.currentItem = item;
    },
    drop() {
      var _obj = this.$refs.flowContent;
      var temp = {
        id: this.getUUID(),
        // id: this.currentItem.kid,
        label: this.currentItem.name,
        top: event.offsetY + 'px',
        left: event.offsetX + 'px',
        Type: this.currentItem.type,
        nodeType: this.currentItem.nodeType
      }
      this.addNode(temp);
      // this.editNode(temp.id);
    },
    allowDrop(event) {
      event.preventDefault()
    },
    //获取checkbox选中值开票
    changeFunOpen(val) {
      this.fromAdd.userList = []
      for (var i in val) {
        this.fromAdd.userList.push(val[i].userId)
      }
    },
    deleteNode(node) {
      console.log('node', node);
      /* 
        获取到值
        isKid:-1,库中不存在这天条数,逻辑删除
        isKid:1,数据存在这条数据,调用接口删除
      */
      this.$confirm('确定要删除当前节点吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal: false
      }).then(() => {
        if (node.kid == -1) {
          this.data.nodeList.forEach((item, index) => {
            if (item.id === node.nodeId) {
              this.data.nodeList.splice(index, 1);
            }
          })
        } else {
          sysFlow.removeFlowNodeById(node.nodeId).then(res => {
            if (res.data.ok) {
              this.data.nodeList.forEach((item, index) => {
                if (item.id === node.nodeId) {
                  this.data.nodeList.splice(index, 1);
                }
              })
              this.$nextTick(function () {
                this.jsPlumb.removeAllEndpoints(node.nodeId);
              })
              this.$message.success('删除成功');
            } else {
              this.$message.warning('删除失败')
            }
          })
        }
      }).catch(() => {})
      return true
    },
    // 改变节点的位置
    changeNodeSiteData(data) {
      console.log('改变节点位置', data);
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i]
        if (node.id === data.nodeId) {
          node.left = data.left
          node.top = data.top
        }
      }
    },
    //编辑节点
    editNode(nodeId) {
      console.log('编辑节点', nodeId)
      this.editType = 'node';
      let obj = {
        nodeId: nodeId
      }
      this.editNodeData = Object.assign({}, obj, this.data)
    },
    editLine(conn) {
      var _this = this;
      let obj = {};
      _this.currentConnect = conn;
      _this.data.lineList.forEach(function (item) {
        if (item.from == conn.sourceId && item.to == conn.targetId) {
          _this.currentLine = item;
          _this.editType = 'line';
          obj = _this.currentLine;
          // this.lineData = Object.assign({}, _this.currentConnect)
          /* _this.$nextTick(function () {
            _this.$refs.lineForm.init(item)
          }) */
        }
        return
      });
      this.lineData = Object.assign({}, obj)

    },
    // 添加新的节点
    addNode(temp) {
      console.log('temp', temp);
      console.log('添加节点', temp)
      let id = temp.id;
      this.data.nodeList.push(temp);
      /* this.$nextTick(function () {
        debugger
        this.jsPlumb.makeSource(temp.id, this.jsplumbSourceOptions)
        this.jsPlumb.makeTarget(temp.id, this.jsplumbTargetOptions)
        this.jsPlumb.draggable(id, {
          containment: 'parent'
        })
      }) */

    },
    getUUID() {
      var s = [];
      var hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "";
      var uuid = s.join("");
      return uuid;
    },
    editFlow() {
      /* this.editType = 'flow';
      this.$nextTick(function () {
        this.$refs.flowEdit.inits(this.data.flowInfo);
      }) */
    },
    lineLabelSave(line) {
      this.currentConnect.getOverlay("label-1").setLabel(line.label);
      this.$set(this.currentLine, 'label', line.label);
      // console.log(this.data.lineList);
    },
    refNodeData() {},
    saveData() {
      console.log('node', this.data.nodeList);
      console.log(this.data.lineList);
      let data = {
        nodeList: []
      }
      let dataArr = [];
      this.data.nodeList.forEach(item => {
        let obj = {};
        obj.name = item.label;
        obj.topPosition = item.top;
        obj.leftPosition = item.left;
        obj.isSign = item.isSign;
        obj.type = item.type;
        obj.nodeType = item.nodeType;
        obj.kid = item.id;
        obj.flowId = this.flowId;
        obj.createUser = localStorage.getItem('kid');
        dataArr.push(obj);
      })
      data.nodeList = dataArr;
      sysFlow.modifyFlow(data).then(res => {
        if (res.data.ok) {
          this.$message.success('保存成功');
        } else {
          this.$message.error(res.data.message)
        }
      }).catch(er => {
        // this.$message.error(res.data)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

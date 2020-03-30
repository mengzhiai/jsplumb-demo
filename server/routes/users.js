/*
 * @Author: your name
 * @Date: 2019-12-18 09:51:40
 * @LastEditTime : 2020-01-02 16:46:24
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\server\routes\users.js
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/getList', function (req, res, next) {
  // res.send('respond with a resource');
  res.json({
    /* data: {
      "nodeList": [{
        "id": "wkakx5ztl",
        "name": "wkakx5ztl",
        "left": "228px",
        "top": "67px",
        "ico": "el-icon-time",
        "show": true,
        "children": [{
          "id": "abc",
          "name": "CentOS7.1",
          "ip": "192.168.1.2",
          "cpu": 96,
          "memory": 96,
          "processorNum": 2000
        }]
      },
      {
        "id": "n1ob2a2q9v",
        "name": "n1ob2a2q9v",
        "left": "617px",
        "top": "68px",
        "ico": "el-icon-odometer",
        "show": true,
        "children": [{
          "ip": "192.168.1.2",
          "cpu": 96,
          "memory": 96,
          "processorNum": 2000
        }]
      },
      {
        "id": "zi8ihavls",
        "name": "zi8ihavls",
        "left": "334px",
        "top": "465px",
        "ico": "el-icon-odometer",
        "show": true,
        "children": [{
          "id": 'abcdef',
          "name": 'oa3.0',
          "ip": "192.168.1.2",
          "cpu": 96,
          "memory": 96,
          "processorNum": 2000
        },
        {
          "id": 'ccdsafdas',
          "name": 'oa3.0admin',
          "ip": "192.168.1.2",
          "cpu": 96,
          "memory": 96,
          "processorNum": 2000
        },
        {
          "id": '23432',
          "name": 'system',
          "ip": "192.168.1.2",
          "cpu": 96,
          "memory": 96,
          "processorNum": 2000
        }
        ]
      }
      ],
      "lineList": [
        {
          "from": "wkakx5ztl",
          "to": "n1ob2a2q9v"
        },
        {
          "from": "wkakx5ztl",
          "to": "zi8ihavls"
        },
        {
          "from": "n1ob2a2q9v",
          "to": "zi8ihavls"
        }
      ]
    } */
    /* data: {
      nodeList: [{"id":"6568dd4b1a3249f48f8cb99bff2e39ba","label":"提交","top":"318px","left":"340px","type":2,"nodeType":"is-state","typeName":"状态","isSign":-1},{"id":"0883ab57-75e0-4fea-ba32-cc23a9e3b580","label":"开始","top":"62px","left":"463px","Type":-1,"nodeType":"is-start"},{"id":"90fa4e99-57d8-4e73-add9-d527bba9cef4","label":"结束","top":"187px","left":"467px","Type":1,"nodeType":"is-end"}],
      lineList:[{"from":"0883ab57-75e0-4fea-ba32-cc23a9e3b580","to":"90fa4e99-57d8-4e73-add9-d527bba9cef4","label":"连线名称","id":"91d88130-1ae2-4dc3-8d9d-fb221aa75a31","Remark":""}]
    } */



    data: {
      ok: true,
      nodeList:[
        {
          "companyId":"all",
          "createTime":1577929745000,
          "createUser":"super-admin",
          "flowId":"5fe0c8e5-118b-43dc-8193-0087ea81bc17",
          "isSign":-1,
          "kid":"a3ebc395-5a25-4d8d-9ebc-1b85c6d5588c",
          "leftPosition":"450px",
          "name":"开始11",
          "nodeType":"is-start",
          "pageNum":0,
          "pageSize":0,
          "topPosition":"26px",
          "type":-1,
          "updateTime":1577929745000
        },
        {
          "companyId":"all",
          "createTime":1577929732000,
          "createUser":"super-admin",
          "flowId":"5fe0c8e5-118b-43dc-8193-0087ea81bc17",
          "isSign":-1,
          "kid":"a738ba41-74b3-405a-80e3-f52a91e236e0",
          "leftPosition":"474px",
          "name":"结束1",
          "nodeType":"is-end",
          "pageNum":0,
          "pageSize":0,
          "topPosition":"125px",
          "type":1,
          "updateTime":1577929732000
        },
        {
          "companyId":"all",
          "createTime":1577430767000,
          "createUser":"super-admin",
          "flowId":"5fe0c8e5-118b-43dc-8193-0087ea81bc17",
          "isSign":-1,
          "kid":"aeae7b3694b54f91af9f50de4063c041",
          "leftPosition":"560px",
          "name":"测试1",
          "nodeType":"is-state",
          "pageNum":0,
          "pageSize":0,
          "topPosition":"193px",
          "type":2,
          "updateTime":1577430767000
        },
        {
          "companyId":"all",
          "createTime":1577430125000,
          "createUser":"super-admin",
          "flowId":"5fe0c8e5-118b-43dc-8193-0087ea81bc17",
          "isSign":1,
          "kid":"b3810440-7e4a-4caa-8079-b2cc8aa07528",
          "leftPosition":"316px",
          "name":"开始10",
          "nodeType":"is-start",
          "pageNum":0,
          "pageSize":0,
          "topPosition":"102px",
          "type":-1,
          "updateTime":1577430125000
        },
        {
          "companyId":"all",
          "createTime":1577929726000,
          "createUser":"super-admin",
          "flowId":"5fe0c8e5-118b-43dc-8193-0087ea81bc17",
          "isSign":-1,
          "kid":"ef3a2a10-d0eb-415a-8696-5f2508f539a2",
          "leftPosition":"270px",
          "name":"开始1",
          "nodeType":"is-start",
          "pageNum":0,
          "pageSize":0,
          "topPosition":"75px",
          "type":-1,
          "updateTime":1577929726000
        }
      ],
      lineList:[
        {
          "from": "a3ebc395-5a25-4d8d-9ebc-1b85c6d5588c",
          "id": "76cd994f-4df7-440c-868d-3ff8ae662ec4",
          "label": "是",
          "to": "a738ba41-74b3-405a-80e3-f52a91e236e0"
        }
      ]
      /* nodeList:[
        {
          "Type":3,
          "id":"fb67f989-5a3a-4b41-87f7-debb6c7908e8",
          "label":"是否接收任务",
          "left":"282px",
          "top":"110px"
      },
      {
          "Type":3,
          "id":"dce8c451-94dd-4e72-8383-ba6f7f8a6ea6",
          "label":"是否直接分案",
          "left":"284px",
          "top":"177px"
      },
      {
          "Type":4,
          "id":"0bcca36e-7953-40b8-9b7c-38be5825fea1",
          "label":"填写撰写人审核人",
          "left":"265px",
          "top":"300px"
      },
      {
          "Type":3,
          "id":"2bb3856b-e472-4ec5-89e5-fc6c06b04aa1",
          "label":"是否接收任务",
          "left":"542px",
          "top":"175px"
      },
      {
          "Type":4,
          "id":"d0d029be-a1c2-4a4e-adce-ec116cac6732",
          "label":"填写撰写人审核人",
          "left":"527px",
          "top":"260px"
      },
      {
          "Type":3,
          "id":"a3fb136f-859f-45ed-bd17-e715e76515d6",
          "label":"是否接收任务",
          "left":"808px",
          "top":"357px"
      },
      {
          "Type":4,
          "id":"5db5eda1-d8fc-4ede-83df-c8aa4b9005db",
          "label":"撰写上传文件",
          "left":"786px",
          "top":"471px"
      },
      {
          "Type":4,
          "id":"91d39699-c7ff-4a3f-8c30-7af04e1dd522",
          "label":"顾问角色",
          "left":"89px",
          "top":"8px"
      },
      {
          "Type":4,
          "id":"fae71654-3131-4654-ab41-44f68495cd05",
          "label":"首代角色",
          "left":"293px",
          "top":"10px"
      },
      {
          "Type":4,
          "id":"57a90302-3157-4f83-af61-14957be324f7",
          "label":"技术中心组长",
          "left":"559px",
          "top":"10px"
      },
      {
          "Type":4,
          "id":"1f26d712-1724-4854-8227-52adf4b6b66a",
          "label":"撰写人",
          "left":"804px",
          "top":"15px"
      },
      {
          "Type":4,
          "id":"e405978a-0fea-429e-882f-66cce0dcdb84",
          "label":"审核人",
          "left":"1050px",
          "top":"17px"
      },
      {
          "Type":3,
          "id":"cd5e37c4-3689-4965-8b46-24a980a5ae30",
          "label":"是否接收任务",
          "left":"1010px",
          "top":"257px"
      },
      {
          "Type":4,
          "id":"2c4eb054-2f1a-4299-bb63-955b18f559d8",
          "label":"审核五书终稿",
          "left":"1011px",
          "top":"349px"
      },
      {
          "Type":3,
          "id":"f2a05c3c-7499-4a8a-a92b-01191da50b8b",
          "label":"是否合格",
          "left":"1025px",
          "top":"415px"
      },
      {
          "Type":3,
          "id":"ee0f2ef5-5891-439a-899a-22733955e63d",
          "label":"审核人与首代是否同一个人",
          "left":"960px",
          "top":"510px"
      },
      {
          "Type":2,
          "id":"cfc9781b-deac-4599-8edd-b23f138b03a0",
          "label":"结束",
          "left":"1025px",
          "top":"650px"
      },
      {
          "Type":3,
          "id":"2dca88a4-9a1b-4707-9269-011b2fd7bf0a",
          "label":"是否合格",
          "left":"302px",
          "top":"505px"
      },
      {
          "Type":2,
          "id":"4277b76d-2703-4fbd-9c5e-ecc3830ca31e",
          "label":"结束",
          "left":"301px",
          "top":"656px"
      },
      {
          "id":"b0157276-14c3-47ff-8ef8-20d294136151",
          "label":"开始立案",
          "top":"110px",
          "left":"90px",
          "Type":1,
          "start": true
      },
      {
          "id":"e887ac8e-a365-4454-89ed-fc3d50ef1eac",
          "label":"提示：点击节点,节线可编辑，点击节点右上角可删除,双击节线可删除",
          "top":"800px",
          "left":"100px",
          "Type":4
      }
      ], */
      /* lineList:[
        {
          "from": "b0157276-14c3-47ff-8ef8-20d294136151",
          "to": "fb67f989-5a3a-4b41-87f7-debb6c7908e8",
          "label": "提交",
          "id": "107b18da-33d5-44e4-81d0-18e991786505",
          "Remark": "",
          "isFlag": true
        },
        {
          "from": "dce8c451-94dd-4e72-8383-ba6f7f8a6ea6",
          "id": "76cd994f-4df7-440c-868d-3ff8ae662ec4",
          "label": "是",
          "to": "0bcca36e-7953-40b8-9b7c-38be5825fea1"
        },
        {
          "Remark": "",
          "from": "dce8c451-94dd-4e72-8383-ba6f7f8a6ea6",
          "id": "06e8efd1-1c0c-4078-8254-408b8060efea",
          "label": "否",
          "to": "2bb3856b-e472-4ec5-89e5-fc6c06b04aa1"
        },
        {
          "Remark": "",
          "from": "2bb3856b-e472-4ec5-89e5-fc6c06b04aa1",
          "id": "31d9196b-7e5b-4c7c-8960-8ddc71969920",
          "label": "是",
          "to": "d0d029be-a1c2-4a4e-adce-ec116cac6732"
        },
        {
          "Remark": "",
          "from": "0bcca36e-7953-40b8-9b7c-38be5825fea1",
          "id": "64b2f7b7-68e1-4092-9bd5-67123dc28e65",
          "label": "提交",
          "to": "a3fb136f-859f-45ed-bd17-e715e76515d6"
        },
        {
          "Remark": "",
          "from": "d0d029be-a1c2-4a4e-adce-ec116cac6732",
          "id": "511f381e-6739-4332-9f38-bb1df4b1b62c",
          "label": "提交",
          "to": "a3fb136f-859f-45ed-bd17-e715e76515d6",
          "isFlag": true
        },
        {
          "Remark": "",
          "from": "cd5e37c4-3689-4965-8b46-24a980a5ae30",
          "id": "5103c247-3b1b-45fd-8f25-748514105ceb",
          "label": "是",
          "to": "2c4eb054-2f1a-4299-bb63-955b18f559d8"
        },
        {
          "Remark": "",
          "from": "2c4eb054-2f1a-4299-bb63-955b18f559d8",
          "id": "12e473b2-8748-462e-9f25-e00b7361c263",
          "label": "连线名称",
          "to": "f2a05c3c-7499-4a8a-a92b-01191da50b8b"
        },
        {
          "Remark": "",
          "from": "f2a05c3c-7499-4a8a-a92b-01191da50b8b",
          "id": "ee970ea6-e2ea-46f2-9d03-517ec93c8285",
          "label": "合格",
          "to": "ee0f2ef5-5891-439a-899a-22733955e63d"
        },
        {
          "Remark": "",
          "from": "ee0f2ef5-5891-439a-899a-22733955e63d",
          "id": "43b7858a-09ad-409d-b699-6605a2acb370",
          "label": "是",
          "to": "cfc9781b-deac-4599-8edd-b23f138b03a0"
        },
        {
          "Remark": "",
          "from": "2dca88a4-9a1b-4707-9269-011b2fd7bf0a",
          "id": "3a8c9d81-11bf-40f0-85a3-7982d99f0707",
          "label": "是",
          "to": "4277b76d-2703-4fbd-9c5e-ecc3830ca31e"
        },
        {
          "Remark": "",
          "from": "ee0f2ef5-5891-439a-899a-22733955e63d",
          "id": "a1924d57-c4c4-4b62-86d2-0764ebe41158",
          "label": "否",
          "to": "2dca88a4-9a1b-4707-9269-011b2fd7bf0a"
        },
        {
          "Remark": "",
          "from": "2dca88a4-9a1b-4707-9269-011b2fd7bf0a",
          "id": "a5ce3984-391a-48a8-8cae-5ab4b536f454",
          "label": "否:驳回[【通知撰写人，审核人，顾问】",
          "to": "5db5eda1-d8fc-4ede-83df-c8aa4b9005db"
        },
        {
          "from": "fb67f989-5a3a-4b41-87f7-debb6c7908e8",
          "to": "dce8c451-94dd-4e72-8383-ba6f7f8a6ea6",
          "label": "是",
          "id": "0fb8a9bc-fe03-4ad7-b78d-2a5fb3e9f5fe",
          "Remark": "",
          "isFlag": true
        },
        {
          "from": "cd5e37c4-3689-4965-8b46-24a980a5ae30",
          "to": "d0d029be-a1c2-4a4e-adce-ec116cac6732",
          "label": "否: 驳回【通知首代】",
          "id": "7c19a2fe-2cb7-4a08-9d35-c1427d4a2667",
          "Remark": "",
          "isFlag": true
        },
        {
          "from": "5db5eda1-d8fc-4ede-83df-c8aa4b9005db",
          "to": "2c4eb054-2f1a-4299-bb63-955b18f559d8",
          "label": "提交",
          "id": "736577be-196c-4bc5-80b4-ef47744dd37d",
          "Remark": "",
          "isFlag": true
        }
      ] */
    }
  })
});

module.exports = router;

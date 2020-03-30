/*
 * @Author: your name
 * @Date: 2019-12-17 10:22:37
 * @LastEditTime : 2019-12-23 13:40:41
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-jsplumb\src\views\jsplumb\data_A.js
 */
var data_A = {
    name: '流程A',
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
        "ico": "el-icon-time",
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
        "ico": "el-icon-time",
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
}

export function getDataA() {
    return data_A
}

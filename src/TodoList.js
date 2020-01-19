import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'

const data = [
  '吃饭',
  '睡觉',
  '打豆豆'
]

class TodoList extends Component {
  render() { 
    return ( 
      <div style={{ margin: "10px" }}>
        <Input 
          placeholder="write somthing"
          style={{ width: "300px", marginRight: '10px' }}
        />
        <Button
          type="primary"
        >
          添加
        </Button>
        <List
          style={{ marginTop: '20px', width: '400px' }}
          bordered
          dataSource={data}
          renderItem={ item => <List.Item>{item}</List.Item>}
        >
        </List>
      </div>
     )
  }
}
 
export default TodoList
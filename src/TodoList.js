import React, { Component } from 'react'
import { Input, Button } from 'antd'
import 'antd/dist/antd.css'

class TodoList extends Component {

  state = {
    list: [
      '吃饭',
      '睡觉',
      '打豆豆'
    ],
    inputValue: ''
  }

  render() { 
    const { list, inputValue } = this.state
    return ( 
      <div style={{ margin: "10px" }}>
        <Input 
          placeholder="write somthing"
          value={inputValue}
          onChange={this.handleClickChange}
          style={{ width: "300px", marginRight: '10px' }}
        />
        <Button
          type="primary"
          onClick={this.handleClickAdd}
        >
          添加
        </Button>
        <ul>
          {
            list.map(( item, index ) => {
              return <li key={index} onClick={this.handleClickDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }

  handleClickChange = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClickAdd = () => {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleClickDelete = index => {
    // state 不允许做任何改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}
 
export default TodoList
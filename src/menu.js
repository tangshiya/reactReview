import React, {Component, Fragment} from 'react'
import './menu.css'

class Menu extends Component {

  state = {
    inputValue: '',
    list: []
  }

  handleInput = e => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick = () => {
    const _list = this.state.list
    this.setState({
      list: [..._list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleDelete = index => {
    let _list = this.state.list
    // splice 返回删除的项
    _list.splice(index, 1)
    this.setState({
      list: _list
    })
  }
  

  render() {
    const { list, inputValue } = this.state
    return(
      <Fragment>
        <div>
          <input 
            type="text" 
            value={inputValue} 
            onChange={this.handleInput}
          />
          <button onClick={this.handleClick}>添加菜品</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li 
              key={`${item}${index}`}
              onClick={this.handleDelete.bind(this, index)}
              // dangerouslySetInnerHTML 是 React 为浏览器 DOM 提供 innerHTML 的替换方案。
              dangerouslySetInnerHTML={{__html: item}}
              ></li>
            })
          }
        </ul>
      </Fragment>
    )
  }

}

export default Menu
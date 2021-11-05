

import React from 'react'

class TodoList extends React.Component {

  render() {
    const listItems = this.props.list.filter((item, index) => (
      this.props.status === 'all' || item.status === this.props.status
    )).map((item, index) => {
      return (
        <li key={item+index}>
          <div className="item-wrap">
            <div>
              <input data-index={index} onChange={(event) => {this.props.changeStatus(event)}} className={item.status === 'completed' ? "item-check checked" : "item-check"} checked={item.status === 'completed' ? "checked" : false} type="checkbox"></input>
              <span className="item-title">{ item.value }</span>
            </div>
            <div className="del-btn-wrap">
              <button data-index={index} onClick={(event) => {this.props.deleteTodo(event)}} className="del-btn">Delete</button>
            </div>
          </div>         
        </li>
      )
      }
    )
    return (
      <div className="item-list">
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}
export default TodoList

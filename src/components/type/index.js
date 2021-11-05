import React from 'react'
class Type extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {this.props.addTodo(event)}}>
        <input className="as-todo type-input" type="text" placeholder="Input what you want to do"></input>
      </form>
    )
  }
}
export default Type

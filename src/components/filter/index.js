import React from 'react'

class Filter extends React.Component{
  render () {
    return (
      <div className="filter">
        <button onClick={(event) => {this.props.setStatus('all')}} className={this.props.status === 'all' ? "filter-item active" : "filter-item"}>All</button>
        <button onClick={(event) => {this.props.setStatus('active')}} className={this.props.status === 'active' ? "filter-item active" : "filter-item"}>Active</button>
        <button onClick={(event) => {this.props.setStatus('completed')}} className={this.props.status === 'completed' ? "filter-item active" : "filter-item"}>Completed</button>
      </div>
    )
  }
}
export default Filter
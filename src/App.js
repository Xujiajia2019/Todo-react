import Header from './components/header/header'
import Type from './components/type/index'
import TodoList from './components/list/index'
import Filter from './components/filter/index'
import './App.css'
import { Container } from '@material-ui/core'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo: [],
      status: 'all'
    }
  }
  addTodoList(e) {
    e.preventDefault()
    let value = e.currentTarget.querySelector('.as-todo').value
    e.currentTarget.reset()
    if (value) {
      this.setState(() => {
        return {
          todo: [...this.state.todo, {value: value, status: 'active'}]
        } 
      }, () => {
        console.log(this.state)
      })
    }
  }

  setStatus(target) {
    this.setState(() => {
      return {
        status: target
      }
    })
  }

  changeStatus(e) {
    let index = e.currentTarget.dataset.index
    let todo = this.state.todo
    if (e.currentTarget.checked) {
      todo.splice(index, 1, {value: todo[index].value, status: 'completed'})
    } else {
      todo.splice(index, 1, {value: todo[index].value, status: 'active'})
    }
    let newTodo = todo
    this.setState(() => {
      return {
        todo: newTodo
      }
    })
  }

  deleteTodo(e) {
    let index = e.currentTarget.dataset.index
    let todo = this.state.todo
    if (index) {
      todo.splice(index, 1)
      let newTodo = todo
      this.setState(() => {
        return {
          todo: newTodo
        }
      })
    }
  }

  render() {
    return (
      <Container maxWidth="sm" className="container">
        <Header></Header>
        <Type addTodo={this.addTodoList.bind(this)}></Type>
        <Filter status={this.state.status} setStatus={this.setStatus.bind(this)}></Filter>
        <TodoList deleteTodo={this.deleteTodo.bind(this)} changeStatus={this.changeStatus.bind(this)} status={this.state.status} list={this.state.todo}></TodoList>
      </Container>
    )
  }
}

export default App

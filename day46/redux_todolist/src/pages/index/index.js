import Taro, { Component } from '@tarojs/taro'
import { View, Input, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './index.css'
import { add, del } from '../../actions/index'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }

  saveNewTodo(e) {
    let { newTodo } = this.state
    if (!e.detail.value || e.detail.value === newTodo) return

    this.setState({
      newTodo: e.detail.value
    })
  }

  addTodo() {
    let { newTodo } = this.state
    // props通过dispatch中的action拿到
    let { add } = this.props
    if (!newTodo) return
    add(newTodo)
    this.setState({
      newTodo: ''
    })
  }

  delTodo(id) {
    let { del } = this.props
    del(id)
  }

  render() {
    let { newTodo } = this.state
    const { todos } = this.props
    console.log(todos)
    const todosJsx = todos.map(todo => {
      return (
        <View className="todo_item">
          <Text>{todo.text}</Text>
          <View className="del" onClick={this.delTodo.bind(this, todo.id)}>-</View>
        </View>
      )
    })
    return (
      <View className="index todos">
        <View className="add_wrap">
          <Input className="todos_item" value={newTodo} onBlur={this.saveNewTodo.bind(this)} />
          <View className="add" onClick={this.addTodo.bind(this)}>+</View>
        </View>

        <View>
          {todosJsx}
        </View>
      </View>
    )
  }
}

// 高阶组件 接收组件 返回新的HOC组件
// connect 两个参数 需要传的state action
export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
    // 若不引入action
    // dispatch({type: 'ADD', data: data})
  },
  del(id) {
    console.log('dek---', id)

    dispatch(del(id))
  }
}))(Index)
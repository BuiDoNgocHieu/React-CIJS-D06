import React from "react";
import "../assets/css/TodoList.css";
// import '../Controllers/TodoControllers'
import {
  getTodo,
  // updateTodo, addTodo, removeTodo, completeTodo
} from "../ultis/ultis";
import { Todo } from "./Todo";
import { TodoEditor } from "./TodoEditor";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.userId,
      todos: [],
      isEdit: false,
    };
    // console.log(this.props)
    this.editTodo = this.editTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    // this.completeTodo = this.completeTodo.bind(this)
    // this.removeTodo = this.removeTodo.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this);
  }
  cancelEdit() {
    this.setState({ isEdit: false });
  }
  // get all of todos of user, then update data of state of todolist
  componentDidUpdate() {
    if (this.props.userId != null && this.props.userId != this.state.userId) {
      this.setState({ userId: this.props.userId }, () => {
        console.log(this.props.userId);
        getTodo(this.props.userId).then((data) => {
          if (JSON.stringify(this.state.todos) != JSON.stringify(data)) {
            // console.log("Need to be update")
            this.setState({ todos: data });
          }
        });
      });
    }

    // if (this.state.userId === undefined) return
    // getTodoOf(this.state.userId).then(data => {
    //     this.setState({
    //         todos: data
    //     })
    // })
  }
  // // when user click save, update data at local and firebase
  saveTodo(indx, newTodo) {
    if (newTodo === null) {
      this.setState({ isEdit: false });
    } else {
      let todos = this.state.todos;
      // check if index larger than todo list
      // if yes, mean add new todo
      if (indx === todos.length) {
        todos.push("");
        newTodo.id = indx;
        newTodo.userId = this.state.userId;
        newTodo.created = new Date(Date.now()).toDateString();
        newTodo.isComplete = false;
        todos[indx] = newTodo;
        // addTodo(newTodo)
        //     .then(fbindx => {
        //         todos[indx].id = fbindx
        //         // update todo with auto-indx of firebase
        //         updateTodo(todos[indx])
        //         this.setState({ todos: todos, isEdit: false })
        //     })
      } else {
        // no, which means update
        todos[indx] = newTodo;
        // updateTodo(newTodo)
        //     .then(() => {
        //         this.setState({ todos: todos, isEdit: false })
        //     })
      }
    }
  }
  // removeTodo(indx) {
  //     let todos = this.state.todos
  //     removeTodo(todos[indx].id)
  //     delete todos[indx]
  //     this.setState({ todos: todos })
  // }
  // completeTodo(indx) {
  //     let todos = this.state.todos
  //     let status = !todos[indx].isComplete
  //     todos[indx].isComplete = status
  //     this.setState({ todos: todos })
  //     updateTodo(todos[indx])

  // }
  // // open editor and load local data
  editTodo(indx) {
    this.setState({ isEdit: true, selectedindx: indx });
  }
  render() {
    // edit
    if (this.state.isEdit) {
      return (
        <TodoEditor
          {...this.state.todos[this.state.selectedindx]}
          indx={this.state.selectedindx}
          saveTodo={this.saveTodo}
          cancel={this.cancelEdit}
        />
      );
    } else {
      // if no edit
      // console.log(this.state)
      return (
        // <Todoeditor {...a}/>
        <div className="todolist-cont border">
          {this.state.todos.map((todo, index) => {
            // console.log(todo)
            return (
              <Todo
                {...todo}
                key={index}
                edit={() => this.editTodo(index)}
                complete={() => this.completeTodo(index)}
                remove={() => this.removeTodo(index)}
              />
            );
          })}
          <div className="add" onClick={() => this.setState({ isEdit: true })}>
            <i className="fal fa-plus fa-2x"></i>
          </div>
        </div>
      );
    }
  }
}

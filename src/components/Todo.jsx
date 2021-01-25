import "../assets/css/Todo.css";

function Todo(props) {
  return (
    <div className="todo border">
      <div className="todo-title complete">
        <h1>title</h1>
        <small>created</small>
      </div>
      <div className="todo-content complete">
        <p>content</p>
      </div>

      <div className="todo-function">
        <input className="button" type="button" value="VIEW" />
        <input className="button" type="button" value="EDIT" />
        <input className="button" type="button" value="COMPLETE" />
        <input className="button" type="button" value="REMOVE" />
      </div>
    </div>
  );
}

export { Todo };

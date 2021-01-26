import "../assets/css/TodoList.css";

function Todo(props) {
  return (
    <div className="todo border">
      <div className={`todo-title  ${props.isComplete ? "complete" : ""}`}>
        <h1>title</h1>
        <small>created</small>
      </div>
      <div className={`todo-content ${props.isComplete ? "complete" : ""}`}>
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

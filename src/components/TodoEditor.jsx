import "../assets/css/TodoEditor.css";
export function TodoEditor({
  indx,
  title,
  created,
  content,
  saveTodo,
  id,
  userId,
  isComplete,
  cancel,
}) {
  // console.log(indx)
  return (
    <form className="todolist editor-cont">
      <div className="editor-function border">
        <input
          className="button"
          type="button"
          value="SAVE"
          onClick={() =>
            saveTodo(indx, { title, created, content, id, userId, isComplete })
          }
        />
        <i className="fal fa-times fa-2x quit" onClick={() => cancel()}></i>
      </div>
      <div className="editor-title">
        <input
          type="text"
          defaultValue={title}
          onChange={(e) => {
            title = e.target.value;
          }}
        />
      </div>
      <div className="editor-content">
        <textarea
          defaultValue={content}
          onChange={(e) => {
            content = e.target.value;
          }}
        ></textarea>
      </div>
    </form>
  );
}

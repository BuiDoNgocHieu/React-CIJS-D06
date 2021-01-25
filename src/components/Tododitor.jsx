export function Todoeditor({
  indx,
  title,
  created,
  content,
  saveTodo,
  id,
  userId,
  isComplete,
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
            Todo(indx, {
              title: "buoisang",
              daycreat: "12/12",
              content: "di hoc",
              id: "CR0BdsxIBYAWx1jkuFO",
              userId,
              isComplete: false,
            })
          }
        />
        <i className="fal fa-times fa-2x quit"></i>
      </div>
      <div className="editor-title">
        <input type="text" />
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

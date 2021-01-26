import "../assets/css/Display.css";
import { TodoList } from "../components/TodoList";
function Display(props) {
  return (
    <div className="display-cont">{<TodoList userId={props.userId} />}</div>
  );
}
export { Display };

import { SiderBar } from "../components/SiderBar";
import "../assets/css/Home.css";
import { Todo } from "../components/Todo";

function Home(props) {
  return (
    <div className="home-cont">
      <SiderBar />
      <Todo />
    </div>
  );
}

export { Home };

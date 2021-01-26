import { Sidebar } from "../components/SiderBar";
import { Display } from "./Display";

import "../assets/css/Home.css";
function Home(props) {
  return (
    <div className="home-cont border">
      <Sidebar userId={props.userId} />
      <Display userId={props.userId} />
    </div>
  );
}
export { Home };

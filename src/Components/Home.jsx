import "../assets/css/Home.css";
import { SiderBar } from "../Components/SiderBar";
import { SigninOutside } from "./SigninOutside";

function Home(props) {
  return (
    <div className="home-cont">
      <SiderBar />
      <SigninOutside />
    </div>
  );
}
export { Home };

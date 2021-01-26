import "../assets/css/Home.css";
import { SiderBar } from "../Components/SiderBar";
import { SignIn } from "../Components/SignIn";

function Home(props) {
  return (
    <div className="home-cont">
      <SiderBar />
      <SignIn />
    </div>
  );
}
export { Home };

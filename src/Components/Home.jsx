import "../assets/css/Home.css";
import { SiderBar } from "../Components/SiderBar";
import { SigninOutside } from "./SigninOutside";

function Home(props) {
  return (
    <div className="home-cont">
      <SiderBar />
      <SigninOutside error={props.error} trySignIn={props.trySignIn} />
    </div>
  );
}
export { Home };

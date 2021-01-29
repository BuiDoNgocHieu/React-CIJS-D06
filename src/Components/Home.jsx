import { ChatBox } from "../Components/ChatBox";
import { SiderBar } from "../Components/SiderBar";
function Home(props) {
  return (
    <div className="home-cont">
      <SiderBar />
      <ChatBox />
    </div>
  );
}
export { Home };

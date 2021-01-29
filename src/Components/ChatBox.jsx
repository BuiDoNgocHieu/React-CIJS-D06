import "../assets/css/ChatBox.css";
function ChatBox(props) {
  return (
    <div className="chat-box-cont border">
      <div className="chat-box-title">
        <div className="chat-box-username">
          <img
            src="https://znews-photo.zadn.vn/w660/Uploaded/mdf_rkxrxd/2019_03_21/Pikachu_2.jpg"
            alt=""
          />
          <h4>Username</h4>
          <div></div>
        </div>
      </div>
    </div>
  );
}
export { ChatBox };

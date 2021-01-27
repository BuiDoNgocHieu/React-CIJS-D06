import "../assets/css/SiderBar.css";

function SiderBar(props) {
  return (
    <div className="siderbar-cont">
      <div className="siderbar-title">
        <h2>
          <a href="/">ReactShareCode.vn</a>
        </h2>
      </div>
      <div className="siderbar-contai">
        <p>
          ReactShareCode.vn nơi cộng đồng sẻ chia những dòng code, <br />
          Hãy để chúng tôi là người đồng hành cùng bạn trên mọi dự án.
        </p>
      </div>
    </div>
  );
}

export { SiderBar };

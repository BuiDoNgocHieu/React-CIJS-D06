import "../assets/css/SiderBar.css";

function SiderBar(props) {
  return (
    <div className="siderbar-cont">
      <div className="siderbar-title">
        <a href="/">
          <h2>ReactShareCode.vn</h2>
        </a>
      </div>
      <div className="siderbar-contai">
        <p>
          ReactShareCoden.vn nơi cộng đồng chia sẻ những dòng mã, <br />
          Hãy để chúng tôi là người bạn đồng hành cùng bạn trên mọi dự án.
        </p>
      </div>
    </div>
  );
}

export { SiderBar };

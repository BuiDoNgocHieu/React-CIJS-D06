import "../assets/css/SiderBar.css";

function SiderBar(props) {
  return (
    <div className="siderbar-cont border  col">
      <div className="avatar-cont container middle">
        <a href="/">
          <img className="avatar-image" src="logo.png" />
        </a>
      </div>
      <div className="option-cont container col">
        <div className="option" style={{ color: "red" }}>
          <i className="fal fa-user fa-2x"></i>
          <p> Account</p>
        </div>
        <div className="option ">
          <i className="fal fa-sign-out fa-2x"></i>

          <p> Sign Out</p>
        </div>
      </div>
    </div>
  );
}

export { SiderBar };

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
          ReactShareCoden.vn where the community shares the lines of code,{" "}
          <br />
          Let us be your companion on all projects.
        </p>
      </div>
    </div>
  );
}

export { SiderBar };

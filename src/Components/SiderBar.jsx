import "../assets/css/SiderBar.css";
function SiderBar(props) {
  return (
    <div className="siderbar-cont border">
      <div className="siderbar-title">
        <img
          src="https://znews-photo.zadn.vn/w660/Uploaded/mdf_rkxrxd/2019_03_21/Pikachu_2.jpg"
          alt=""
        />
        <h3>Username</h3>
      </div>

      <div className="siderbar-input">
        <input type="text" placeholder="Serach" />
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export { SiderBar };

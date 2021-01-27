import "../assets/css/SignIn.css";

function SignIn(props) {
  return (
    <div className="signin-cont">
      <div className="signin-image">
        <img src="reactsharecode.png" alt="" />
      </div>
      <form className="signin-container">
        <div className="signin-tittle">
          <p>REACTSHARECODE.VN</p>
        </div>
        <div className="signin-second-bar">
          <p>ĐĂNG NHẬP</p>
          <div className=" tool-second-bar">
            <small>(Hoặc) Đăng nhập</small>
            <img src="sing.png" alt="" />
          </div>
        </div>
        <div className="tools-there-bar">
          <p>
            Bạn chưa có tài khoản ReactShareCode.vn?{" "}
            <a href="/signup">Đăng ký ngay</a>
          </p>
          <div className="signin-input">
            <div className="signin-input-child">
              <p>Username:</p>
              <input type="text" placeholder="Vui lòng nhập Username" />
            </div>
            <div className="signin-input-child">
              <p>Password:</p>
              <input type="password" placeholder="**********" />
            </div>
          </div>
          <div className="signin-password">
            <a href="">
              <p>Quên mật khẩu</p>
            </a>
          </div>
          <div className="signin-input">
            <input type="button" name="signin" id="signin" value="Đăng nhập" />
          </div>
          <div className="signin-epilogues">
            <p>ReactShareCode.vn Cộng đồng sẻ chia và download source code</p>
          </div>
        </div>
      </form>
    </div>
  );
}
export { SignIn };

import "../assets/css/SigninOutside.css";

function SigninOutside(props) {
  return (
    <div className="signin-Out-cont">
      <form className="signin-Out-container">
        <div className="signin-Out-tittle">
          <p> EDUCATION KIDS</p>
        </div>
        <div className="signin-Out-second-bar">
          <p>ĐĂNG NHẬP</p>
          <div className=" tools-second-bar">
            <small>(Hoặc) Đăng nhập</small>
            <img src="sing.png" alt="" />
          </div>
        </div>
        <div className="tools-there-bar">
          <p>
            Anh (chị) chưa có tài khoản của Education Kids?{" "}
            <a href="/signup"> Đăng ký ngay</a>
          </p>
          <div className="signin-Out-input">
            <div className="signin-Out-input-child">
              <p>Username:</p>
              <input type="text" placeholder="Vui lòng nhập Username" />
            </div>
            <div className="signin-Out-input-child">
              <p>Password:</p>
              <input type="password" placeholder="**********" />
            </div>
          </div>
          <div className="signin-Out-forget-password">
            <a href="">
              <p>Quên mật khẩu</p>
            </a>
          </div>
          <div className="signin-Out-input">
            <input
              type="button"
              name="signinOut"
              id="signinOut"
              value="Đăng nhập"
            />
          </div>
          <div className="signin-Out-epilogue">
            <p>Education Kids Cộng đồng giáo dục trẻ em Việt Nam</p>
          </div>
        </div>
      </form>
      <div>
        <img
          src="https://curiousworld-static-files.s3.amazonaws.com/s3fs-public/inline-images/footer.png"
          alt=""
        />
      </div>
    </div>
  );
}
export { SigninOutside };

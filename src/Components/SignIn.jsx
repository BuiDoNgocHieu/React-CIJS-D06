import { Component } from "react";
import "../assets/css/SignIn.css";
import { SignInUltis } from "../ultis/ultis";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    SignInUltis(this.state)
      .then((userId) => {
        localStorage.setItem("userId", userId);
        window.location.assign("/");
      })
      .catch((er) => {
        alert(er.message);
      });
  }
  handleChange(e, type) {
    console.log(e.target.value);
    if (type === "password") this.setState({ password: e.target.value });
    if (type === "username") this.setState({ username: e.target.value });
  }

  render() {
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
                <input
                  type="text"
                  onChange={(e) => this.handleChange(e, "username")}
                  placeholder="Vui lòng nhập Username"
                />
              </div>
              <div className="signin-input-child">
                <p>Password:</p>
                <input
                  type="password"
                  onChange={(e) => this.handleChange(e, "password")}
                  placeholder="**********"
                />
              </div>
            </div>
            <div className="signin-password">
              <a href="">
                <p>Quên mật khẩu</p>
              </a>
            </div>
            <div className="signin-input">
              <input
                type="button"
                name="signin"
                id="signin"
                value="Đăng nhập"
                onClick={this.handleSubmit}
              />
            </div>
            <div className="signin-epilogues">
              <p>ReactShareCode.vn Cộng đồng sẻ chia và download source code</p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export { SignIn };

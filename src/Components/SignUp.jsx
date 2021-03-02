import "../assets/css/SignUp.css";

function SignUp(props) {
  return (
    <div className="signup-cont">
      <form className="border">
        <div className="signup-bar">
          <p>ĐĂNG KÝ TÀI KHOẢN</p>
          <div className="signup-tool-bar">
            <small>(Hoặc) Đăng nhập nhanh</small>
            <img src="sing.png" alt="" />
          </div>
        </div>
        <div className="signup-card-p">
          <p>
            Anh (chị) đã có tài khoản Education Kids?{" "}
            <a href="/">Đăng nhập ngay</a>
          </p>
        </div>
        <div className="signup-container">
          <div className="signup-name">
            <p>Họ: </p>
            <input className="surname" type="text" placeholder="Surname" />
            <p className="haha">Tên: </p>
            <input className="name" type="text" placeholder="Name" />
          </div>

          <div className="signup-inps">
            <label htmlFor="">
              Email<span className="text-error">*</span>
            </label>
            <div className="signup-input">
              <input
                id="email"
                type="text"
                placeholder="VD:  thanhvy123@gmail.com"
              />
            </div>
          </div>
          <div className="signup-inps">
            <label htmlFor="">
              Username<span className="text-error">*</span>
            </label>
            <div className="signup-input">
              <input id="user" type="text" placeholder="VD:  ThanhVy92" />
            </div>
          </div>
          <div className="signup-inps">
            <label htmlFor="">
              Số điện thoại<span className="text-error">*</span>
            </label>
            <div className="signup-input">
              <input
                id="sdt"
                type="text"
                placeholder="VD:  039..., 097..., +84..."
              />
            </div>
          </div>
          <div className="signup-inps">
            <label htmlFor="">
              Password<span className="text-error">*</span>
            </label>
            <div className="signup-input">
              <input id="pass" type="password" placeholder="**********" />
            </div>
          </div>
          <div className="signup-inps">
            <label htmlFor="">
              Nhập lại password<span className="text-error">*</span>
            </label>
            <div className="signup-input">
              <input type="password" placeholder="**********" />
            </div>
          </div>
        </div>
        <div className="cookie">
          <p>
            Bằng cách nhấp vào Đăng ký, bạn đồng ý với{" "}
            <a href="/about">
              Điều khoản, Chính sách dữ liệu và Chính sách cookie
            </a>
            của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS
            và hủy nhận bất kỳ lúc nào.
          </p>
        </div>
        <div className="signup-inps">
          <div className="signup-input">
            <input
              type="button"
              value="Đăng ký"
              onClick={() => {
                props.trySignUp({
                  email: document.getElementById("email").value,
                  username: document.getElementById("user").value,
                  password: document.getElementById("pass").value,
                  numberPhone: document.getElementById("sdt").value,
                });
              }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export { SignUp };

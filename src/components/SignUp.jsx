import "../assets/css/SignUp.css";

function SignUp(props) {
  return (
    <div className="signup-cont">
      <form className="border signup-container">
        <div className="signup-tittle">
          <h1 className="signup-h1">Sign Up</h1>
          <p>Always accompany your steps</p>
        </div>

        <div className="signup-container">
          <div className="signup-name">
            <input className="surname" type="text" placeholder="Surname" />
            <input className="name" type="text" placeholder="Name" />
          </div>
          <div className="signup-input">
            <input type="text" placeholder="Enter username" />
          </div>

          <div className="signup-input">
            <input type="text" placeholder="Enter phone number or email" />
          </div>

          <div className="signup-input">
            <input type="password" placeholder="Enter password" />
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
        <div className="signup-input">
          <input type="button" value="Sign Up" />
        </div>
      </form>
    </div>
  );
}

export { SignUp };

import "../assets/css/SignIn.css";

function SignIn(props) {
  return (
    <div className="signin-cont">
      <form className="border signin-container">
        <div>
          <h1 className="card-h1">Sign In</h1>
        </div>

        <div className="signin-input">
          <p>Username</p>
          <input type="text" placeholder="Enter username" />
        </div>

        <div className="signin-input">
          <p>Password</p>
          <input type="password" placeholder="Enter password" />
        </div>

        <div className="signin-input more">
          <small>
            <a href="">Forgot password?</a>
          </small>
          <small className="signup">
            <a href="/signup">Sign Up</a>
          </small>
        </div>

        <div className="signin-input">
          <input type="button" value="Sign In" />
        </div>
      </form>
    </div>
  );
}

export { SignIn };

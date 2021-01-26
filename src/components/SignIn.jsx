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
        <form className="border signin-container">
          <div>
            <h1 className="card-h1">Sign In</h1>
          </div>

          <div className="signin-input">
            <p>Username</p>
            <input
              type="text"
              onChange={(e) => this.handleChange(e, "username")}
              placeholder="Enter username"
            />
          </div>

          <div className="signin-input">
            <p>Password</p>
            <input
              type="password"
              onChange={(e) => this.handleChange(e, "password")}
              placeholder="Enter password"
            />
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
            <input type="button" value="Sign In" onClick={this.handleSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

export { SignIn };

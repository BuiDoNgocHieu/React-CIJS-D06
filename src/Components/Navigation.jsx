import "../assets/css/Navigation.css";

function Navigation() {
  return (
    <div className="nav-cont">
      <div className="nav-tittle">
        <a href="/">
          <p className="text">Education Kids</p>
        </a>
      </div>
      <div className="nav-items tools">
        <a href="/signin">Sign in</a>
        <span className="notify notify-right"></span>
      </div>
      <div className="nav-items tools">
        <a href="/signup">Sign Up</a>
      </div>
      <div className="nav-items tools">
        <a href="/about">About Us</a>
      </div>
    </div>
  );
}

export { Navigation };

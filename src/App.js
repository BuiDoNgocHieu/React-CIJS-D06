import './App.css';
import { Navigation } from "./Components/Navigation";
import { Home } from './Components/Home';
import { About } from "./Components/About";
import { ReadOurBlog } from "./Components/ReadOurBlog";
import { SignUp } from "./Components/SignUp";
import { signIn, signUp } from "./ultis/ultis";
import { Component } from 'react';
import { HomePage } from './Components/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: localStorage.getItem("userId"),
      error: null,
    };
    this.trySignIn = this.trySignIn.bind(this);
    this.trySignUp = this.trySignUp.bind(this);
    this.trySignOut = this.trySignOut.bind(this);

  }
  trySignIn(accountInfo) {
    signIn(accountInfo)
      .then(userId => {
        localStorage.setItem("userId", userId);
        this.setState({ userId });
        window.location.assign("/homepage");
      })
      .catch(error => {
        // console.log(error);
        this.setState({ error })
      });
  }
  trySignUp(accountInfo) {
    signUp(accountInfo)
      .then(userId => {
        localStorage.setItem("userId", userId);
        this.setState({ userId });
        window.location.assign("/homepage");
      })
      .catch(error => {
        console.log(error);
      });
  }
  trySignOut() {
    localStorage.removeItem("userId")
    this.setState({ userId: null })
  }
  render() {
    let path = window.location.pathname
    let listOfUrls = [
      '/signin', '/signup', '/about', '/',
    ]
    if (listOfUrls.indexOf(path) == -1) {
      console.log(path)
    }
    const comp = {
      '/signin': <ReadOurBlog />,
      '/signup': <SignUp trySignUp={this.trySignUp} />,
      '/': <Home error={this.state.error} trySignIn={this.trySignIn} />,
      '/about': <About />,
      "/homepage": <HomePage userId={this.state.userId} />,
    }
    console.log(path)
    // signIn({ username: "ngochieu", password: "35123" })
    //   .then((userInfo) => {
    //     console.log(userInfo);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    console.log(this.state.userId);
    return (

      <div className="app-cont">
        <Navigation />
        {
          comp[window.location.pathname]
        }
        {/* <signIn/> */}
      </div >
    );
  }
}

export default App;

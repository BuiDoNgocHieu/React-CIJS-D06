import './App.css';
import { Navigation } from "./Components/Navigation";
import { Home } from './Components/Home';
import { About } from "./Components/About";
import { ReadOurBlog } from "./Components/ReadOurBlog";
import { SignUp } from "./Components/SignUp";
import { signIn, signUp } from "./ultis/ultis";
import { Component } from 'react';
import { HomePage } from './Components/HomePage';
import { BeepBeep } from './Components/BeepBeep';
import { BillyBamBam } from './Components/Billy&BamBam';
import { Matinee } from './Components/Matinee';
import { Dino } from './Components/Dino&theEggHunt';
import { Charlie } from './Components/Charlie&theNumber';
import { Ahoy } from './Components/AhoyPirates';


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
    this.trySignOut = this.tryComeBack.bind(this);

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
    window.location.assign("/");
  }
  tryComeBack() {
    window.location.assign("/homepage");
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
      "/homepage": <HomePage trySignOut={this.trySignOut} userId={this.state.userId} />,
      '/beepbeep': <BeepBeep tryComeBack={this.tryComeBack} />,
      '/billy&bambam': <BillyBamBam tryComeBack={this.tryComeBack} />,
      '/matinee': <Matinee tryComeBack={this.tryComeBack} />,
      '/dino': <Dino tryComeBack={this.tryComeBack} />,
      '/charlie': <Charlie tryComeBack={this.tryComeBack} />,
      '/ahoy': <Ahoy tryComeBack={this.tryComeBack} />,
    }
    console.log(path)

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

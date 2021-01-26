import './App.css';
import { Component } from "react";
import { Navigation } from './components/Navigation'
import { About } from "./components/About";
import { Home } from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null
    }
  }
  componentDidMount() {
    this.setState({ userId: localStorage.getItem('userId') })
  }
  componentDidUpdate() {
    // this.setState({ userId: localStorage.getItem('userId') })
    // console.log(this.state)

  }
  render() {
    let path = window.location.pathname
    let listOfUrls = [
      '/signin', '/signup', '/about', '/'
    ]
    if (listOfUrls.indexOf(path) == -1) {
      console.log(path)
    }
    if (localStorage.getItem('userId') == null && window.location.pathname != '/signin') {
      // chua co dang dang nhap
      window.location.assign('/signin')

    }
    const comp = {
      '/signin': <SignIn />,
      '/signup': <SignUp />,
      '/': <Home userId={this.state.userId} />,
      '/about': <About />
    }

    return (

      <div className="app-cont ">
        <Navigation />
        {
          comp[window.location.pathname]
        }
      </div>
    );
  }
}

export default App;
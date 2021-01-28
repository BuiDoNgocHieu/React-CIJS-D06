import './App.css';
import { showInfo } from "./ultis/ultis";
import { Navigation } from "./Components/Navigation";
import { Home } from './Components/Home';
import { About } from "./Components/About";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";
import { HomePage } from "./Components/HomePage";

function App() {
  showInfo()
  let path = window.location.pathname
  let listOfUrls = [
    '/signin', '/signup', '/about', '/', '/homepage'
  ]
  if (listOfUrls.indexOf(path) == -1) {
    console.log(path)
  }
  const comp = {
    '/signin': <SignIn />,
    '/signup': <SignUp />,
    '/': <Home />,
    '/about': <About />,
    '/homepage': <HomePage />
  }
  console.log(path)
  return (
    <div className="app-cont">
      <Navigation />
      {
        comp[window.location.pathname]
      }
    </div >
  );
}

export default App;

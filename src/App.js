import './App.css';
import { Navigation } from "./Components/Navigation";
import { Home } from './Components/Home';
import { About } from "./Components/About";
import { SignIn } from "./Components/SignIn";
import { SignUp } from "./Components/SignUp";

function App() {
  let path = window.location.pathname
  let listOfUrls = [
    '/signin', '/signup', '/about', '/'
  ]
  if (listOfUrls.indexOf(path) == -1) {
    console.log(path)
  }
  const comp = {
    '/signin': <SignIn />,
    '/signup': <SignUp />,
    '/': <Home />,
    '/about': <About />
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

import './App.css';
import { Navigation } from './components/Navigation'
import { About } from './components/About'
import { Home } from './components/Home'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'





function App() {
  let path = window.location.pathname
  let listOfUrls = [
    '/signin', '/signup', '/about', '/'
  ]
  if (listOfUrls.indexOf(path) == -1) {
    window.location.assign('/')
    console.log(path)
  }
  const resultComponent = {
    '/signin': < SignIn />,
    '/signup': < SignUp />,
    '/': < Home />,
    '/about': < About />
  }
  return (
    <div className="app-cont">
      <Navigation />
      {
        resultComponent[window.location.pathname]
      }
    </div>
  );
}

export default App;

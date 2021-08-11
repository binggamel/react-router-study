import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import { Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about"><button>about</button></Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default App;

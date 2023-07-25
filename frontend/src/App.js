import Nav from './components/nav/Nav';
import SignUp from './components/signup/Signup';
import { RouteHandler } from './components/router/RouteHandler';
import './App.css';

function App() {
  return (
    <div className="App">
     <Nav/>
     <RouteHandler/>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderPart from "./components/header"
import FooterPart from "./components/footer"
import Home from './pages/home'
import About from './pages/about'
import District from './pages/district'
import Error from './pages/error'

function App() {
  return (
    <Router>
      <HeaderPart/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/district">
          <District />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <FooterPart/>
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Card1 from './Components/Card1';
import Card3 from './Components/Card3';

function App() {
  return (
    <Router>

    <div className="container">

      
      <Switch>
    <Route exact path="/">
    <Card1/>
    </Route>
          <Route exact path="/1">
            <Card3 num='1' />
          </Route>
          <Route exact path="/2">
            <Card3 num='2' />
          </Route>
          <Route exact path="/3">
            <Card3 num='3' />
          </Route>
          <Route exact path="/4">
            <Card3 num='4' />
          </Route>
          <Route exact path="/5">
            <Card3 num='5' />
          </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;

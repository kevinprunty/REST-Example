import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

import Pokemon from './Pages/Pokemon/Pokemon';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <h1>REST Practice / Example Site</h1>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/poke">
            <Pokemon />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

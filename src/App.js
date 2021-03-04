import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route pass='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

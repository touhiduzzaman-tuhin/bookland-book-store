import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import BookDetails from './components/BookDetails/BookDetails';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/bookDetails'>
          <BookDetails></BookDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

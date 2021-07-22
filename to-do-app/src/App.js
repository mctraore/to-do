import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LeftNav from './components/LeftNav/LeftNav'
import './App.css';

function App() {
  return (
    <div>
      <LeftNav/>
      <Router>
        <Switch>
          <Route path=""></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

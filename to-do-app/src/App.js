import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LeftNav from './components/LeftNav/LeftNav'
import AllTasks from './components/AllTasks/AllTasks'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">
            <AllTasks/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

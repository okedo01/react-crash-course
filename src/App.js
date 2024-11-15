import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <div className="content">
          <switch>
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/Create">
              <Create />
            </Route>
          </switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

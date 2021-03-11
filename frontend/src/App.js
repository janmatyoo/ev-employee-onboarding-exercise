import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/list" component={List}/>
          <Route path="/add" component={Add}/>
          <Route path="/edit" component={Edit}/>
          <Route path="/delete" component={Delete}/>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;

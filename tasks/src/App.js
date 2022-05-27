import './App.css';
import Navbars from './components/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Notecontext from './context/Notecontext';
import Employee from './components/Employee';
import Todos from './components/Todos';


function App() {
  const todos = {
    "name": "Libron Lopes",
    "email": "libron@gmail.com",
    "gender": "Male",
    "qualification": "B Tech"
  }
  return (
    <>
       <Notecontext.Provider value={todos}>
        <Router>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/employee" component={Employee}/>
            <Route exact path="/todos" component={Todos}/>
            <Route exact path="/about" component={About}/>
          </Switch>
        </Router>
        </Notecontext.Provider>
    </>
  );
}

export default App;

//import logo from './logo.svg';
import './App.css';
import Registration from './component/user/RegistrationForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookDetailsForm from './component/Book/BookDetailsForm';
import Login from './component/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register"><Registration /></Route>
          <Route path="/book"><BookDetailsForm /></Route>
          <Route path="/login"><Login /></Route>

       </Switch>
      </Router>
</div>
  );
}

export default App;

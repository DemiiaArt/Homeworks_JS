import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./pages/Users.jsx";
import User from "./pages/User.jsx";
import CreateUser from "./pages/CreateUser.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/CreateUser" exact>
            <CreateUser />
          </Route>
          <Route path="/user/:userId" exact>
            <User />
          </Route>
          <Route path="/" exact>
            <Users />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

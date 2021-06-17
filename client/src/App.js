import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import TopBar from "./components/topbar/TopBar";
import Article from "./pages/article/Article";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/post/:id" exact component={Article} />
        <Route path="/register" exact component={Register} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/write" exact component={Write} />
        <Route path="/login" exact component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

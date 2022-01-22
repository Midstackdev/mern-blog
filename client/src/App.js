import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import TopBar from "./components/topbar/TopBar";
import Article from "./pages/article/Article";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { useContext } from 'react';
import { Context } from './context/Context';
import axios from 'axios';

axios.defaults.baseURL = `${document.location.origin}/api/`;

function App() {
  const { user } = useContext(Context)
  
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route path="/post/:id" exact component={Article} />
        <Route path="/register" exact component={() => ( user? <Redirect to="/"/> : <Register/>)} />
        <Route path="/settings" exact component={() => ( !user? <Redirect to="/login"/> : <Settings/>)} />
        <Route path="/write" exact component={() => ( !user? <Redirect to="/login"/> : <Write/>)} />
        <Route path="/login" exact component={() => ( user? <Redirect to="/"/> : <Login/>)} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

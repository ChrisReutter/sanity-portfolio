import "tailwindcss/tailwind.css"
import {SinglePost, Post, Project, Home, About, Navbar} from './components/index'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={About} path="/about" />
      <Route component={SinglePost} path="/post/:slug" />
      <Route component={Post} path="/post" />
      <Route component={Project} path="/project" />
      </Switch>
    </Router>

  );
}

export default App;

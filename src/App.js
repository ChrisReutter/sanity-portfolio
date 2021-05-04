import react from "react"
import "tailwindcss/tailwind.css"
import {SinglePost, Post, Project, Home, About, Navbar} from './components/index'
import {BrowserRouter, BrowserRouter as Router, Route, Switch} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route component={Home} path="/" exact/>
      <Route component={About} path="/about" />
      <Route component={SinglePost} path="/post/:slug" />
      <Route component={Post} path="/post" />
      <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>

  );
}

export default App;

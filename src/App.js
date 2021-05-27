
import './App.css';
import './css_comps/header_nav.css';
import NavBar from './comps/navbar';
import { Route, Router, Switch } from 'react-router';
import Home from './comps/home';
import About from './comps/about';
import Page404 from './comps/page404';

function App() {
  return (
   <Router>
      <header className="container-fluid shadow-sm">
        <NavBar />
      </header>
      <main className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route path="/" component={Page404}/>
        </Switch>
      </main>
      <footer></footer>
    </Router>

  );
}

export default App;

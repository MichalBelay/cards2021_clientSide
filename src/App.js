import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './css_comps/header_nav.css'
import NavBar from './comps/navbar';
import Home from './comps/home';
import About from './comps/about';
import Page404 from './comps/page404';
import SingupClient from './comps/singup';

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
          <Route exact path="singup" component={SingupClient}/>
          
          <Route path="/" component={Page404}/>
        </Switch>
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;

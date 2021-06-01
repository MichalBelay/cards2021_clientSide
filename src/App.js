import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import './css_comps/header_nav.css'
import './css_comps/card.css'
import NavBar from './comps/navbar';
import Home from './comps/home';
import About from './comps/about';
import Page404 from './comps/page404';
import SignUpClient from './comps/signup';
import Login from './comps/login';
import Footer from './comps/footer';
import UserInfo from './comps/userInfo';
import ProtectedRoute from './comps/common/protectedRoute';
import { useEffect } from 'react';
import { checkUser } from './services/userSer';

function App() {
  let history = useHistory();

  useEffect(() => {
    checkUser();
    //TODO: אם יש טוקן רק אחרי
    // שקיבלנו בוודאות מידע של היוזר רק אז
    // נציד את המיין
  }, [])
  
  return (
    <Router>
      <header className="container-fluid shadow-sm">
        {/* בצורה הזאת אנחנו מקבלים יכולת לדבר דרך הפרופס
        עם היו אר אל ולראות אם הוא השתנה ובנוסף נוכל לרנדר אותו 
        מחדש כל פעם שיש שינוי ביו אר אל */}
        <Route path="/" component={NavBar} />
      </header>
      <main className="container" style={{ minHeight: "81vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/signup" component={SignUpClient} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/userInfo" component={UserInfo}/> */}
          <ProtectedRoute path="/userInfo" comp={UserInfo} />
          <Route path="/" component={Page404} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </Router>
  );
}

export default App;

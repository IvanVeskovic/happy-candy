import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import './main.scss'
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Contact from './pages/contact/Contact';
import { useContext } from 'react';
import { ShopContext } from './components/ShopContext';
import LogInSignIn from './components/LogInSignIn/LogInSignIn';

function App() {
  const { showLogInSignIn } = useContext(ShopContext);

  return (
      <Router>
        <div className="App">
          <Nav />
          <Cart /> 
          {
            showLogInSignIn && <LogInSignIn />
          }
          
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>

          </Switch>

          <Footer />
        </div>
      </Router>
  );
}

export default App;

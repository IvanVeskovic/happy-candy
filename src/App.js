import './App.css';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import './main.scss'
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ShopProvider } from './components/ShopContext';
import Cart from './components/cart/Cart';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="App">
          <Nav />
          <Cart /> 
          
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/shop'>
              <Shop />
            </Route>

          </Switch>

          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;

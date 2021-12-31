import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddProduct from './pages/AddProduct/AddProduct';
import AllProducts from './pages/AllProducts/AllProducts';
import Cart from './pages/Cart/Cart';
import AuthProvider from './pages/context/AuthProvider';
import Details from './pages/details/Details';
import Explore from './pages/Explore/Explore';
import Home from './pages/Home/Home';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import Footer from './pages/Shared/Footer';
import Navigation from './pages/Shared/Navigation';
import PrivateRoute from './pages/Shared/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/explore">
        <Explore></Explore>
        </Route>
        <PrivateRoute path="/details/:id">
        <Details></Details>
        </PrivateRoute>
        <Route path="/add-product">
        <AddProduct></AddProduct>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/register">
        <Register></Register>
        </Route>
        <Route path="/cart">
        <Cart></Cart>
        </Route>
        <Route path="/all-products">
        <AllProducts></AllProducts>
        </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

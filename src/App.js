import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import Product from "./pages/product";
import Contact from "./pages/contact";
import { Redirect, Route, Switch } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/login";
import StoreProviderLogin from "./redux/Login/Provider";
import PrivateRoute from "./Routes/Private/PrivateRoute"

function App() {
  return (
    <>
      <StoreProviderLogin>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/products/:id" component={ProductDetail} />
          <Route exact path="/cart" component={Cart} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </StoreProviderLogin>
    </>
  );
}

export default App;

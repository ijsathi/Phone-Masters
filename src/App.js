import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import {Navigate, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
    <Header></Header>
      <Routes >
        <Route exact path='/' element={<Navigate to='/' />} />
        <Route exact index  element={<Home />} />
        <Route exact path='products' element={<Product />} />
        <Route exact path='products/:id' element={<ProductDetails />} />
        <Route exact path='cart' element={<Cart />} />
        <Route exact path='checkout' element={<Checkout />} />
        <Route exact path='about' element={<About />} />
        <Route exact path='contact' element={<Contact />} />
      </Routes> 
    <Footer></Footer>
    </>
  );
}

export default App;

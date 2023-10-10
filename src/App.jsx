
import {   Route, BrowserRouter as Router, Routes,
 } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout';
import Home from './views/Home';
import Products from './views/Products';
import Offers from './views/Offers';
import Brands from './views/Brands';
import { Contact } from './views/Contact';
import Cart from './views/Cart';
import Login from './views/Login';
import Dashboard from './views/Dashboard';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="login" element={<Login />} />

          <Route path="offers" element={<Offers />} />
          <Route path="brands" element={<Brands />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App

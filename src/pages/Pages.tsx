import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./home/home";
import Account from "./account/account";
import Cart from "./cart/cart";
import Checkout from "./checkout/checkout";
import Contact from "./contact/contact";
import LogIn from "./log-in/log-in";
import Quiz from "./quiz/quiz";
import Shop from "./shop/shop";
import Supplement from "./supplement/supplement";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/supplement" element={<Supplement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

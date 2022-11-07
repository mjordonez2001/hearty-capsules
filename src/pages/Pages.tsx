import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(async () => await import("./home/home"));
const Account = lazy(async () => await import("./account/account"));
const Cart = lazy(async () => await import("./cart/cart"));
const Checkout = lazy(async () => await import("./checkout/checkout"));
const Contact = lazy(async () => await import("./contact/contact"));
const Login = lazy(async () => await import("./login/login"));
const Quiz = lazy(async () => await import("./quiz/quiz"));
const Shop = lazy(async () => await import("./shop/shop"));
const Supplement = lazy(async () => await import("./supplement/supplement"));

function Pages() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/supplement" element={<Supplement />} />
      </Routes>
    </Suspense>
  );
}

export default Pages;

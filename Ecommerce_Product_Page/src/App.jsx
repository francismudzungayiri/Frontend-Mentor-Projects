import { useState } from "react";
import NavBar from "./components/Nav";
import Product from "./components/Product";

const App = () => {
  const [checkoutIterms, setCheckoutIterms] = useState(0);

  function handleCheckOut(itemscount) {
    setCheckoutIterms(itemscount);
  }
  return (
    <>
      <NavBar itemOrdered={checkoutIterms} />
      <Product checkout={handleCheckOut} />
    </>
  );
};

export default App;

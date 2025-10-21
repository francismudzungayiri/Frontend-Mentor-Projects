import { useState } from "react";
import NavBar from "./components/Nav";
import Product from "./components/Product";

const App = () => {
  const [checkoutIterms, setCheckoutIterms] = useState(0);

  function handleCheckOut() {
    setCheckoutIterms(checkoutIterms);
  }
  return (
    <>
      <NavBar />
      <Product addItems={handleCheckOut} />
    </>
  );
};

export default App;

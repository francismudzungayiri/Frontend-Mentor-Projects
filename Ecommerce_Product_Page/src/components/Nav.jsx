import { useState } from "react";
import Cart from "./Cart";

const NavBar = () => {
  const navlinks = ["Collections", "Men", "Women", "About", "Contact"];
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-3/4 mx-auto font-kumbh-sans">
      <nav className=" mt-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-1/2 gap-10">
          <img src="./images/logo.svg" />
          <div className="hidden md:flex flex-row items-center gap-8 text-Dark-grayish-blue">
            {navlinks.map((link, index) => {
              return (
                <a key={index} href="#">
                  {link}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center w-fit gap-6 relative">
          <img
            src="./images/icon-cart.svg"
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer"
          />
          <img
            src="./images/image-avatar.png"
            className="w-10 h-10 rounded-full"
          />
          {isVisible && <Cart />}
        </div>
      </nav>
      <hr className="block border-t-1 border-Grayish-blue my-8" />
    </div>
  );
};

export default NavBar;

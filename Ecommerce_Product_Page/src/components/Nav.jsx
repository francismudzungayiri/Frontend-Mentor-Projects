import { useState } from "react";
import Cart from "./Cart";

const NavBar = ({ itemOrdered }) => {
  const navlinks = ["Collections", "Men", "Women", "About", "Contact"];
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="w-3/4 mx-auto font-kumbh-sans">
      <nav className=" mt-5 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center w-1/2 gap-3 lg:gap-10">
          <img
            onClick={toggleMenu}
            src="./images/icon-menu.svg"
            className="sm:flex lg:hidden"
          />
          <img src="./images/logo.svg" />
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col gap-10 pb-5 lg:pb-0 w-1/2 absolute top-30 left-0 bg-White lg:relative lg:top-0 lg:flex lg:flex-row items-center lg:gap-8 text-Dark-grayish-blue`}
          >
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
          {isVisible && <Cart itemsOrdered={itemOrdered} />}
        </div>
      </nav>
      <hr className="block border-t border-Grayish-blue my-8" />
    </div>
  );
};

export default NavBar;

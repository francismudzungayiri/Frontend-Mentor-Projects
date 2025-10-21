import { useState } from "react";

const Product = ({ CheckoutItems }) => {
  const productthumbails = [
    "./images/image-product-1-thumbnail.jpg",
    "./images/image-product-2-thumbnail.jpg",
    "./images/image-product-3-thumbnail.jpg",
    "./images/image-product-4-thumbnail.jpg",
  ];

  const productimages = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
  ];

  const [items, setItemsNumber] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const [productIndex, setProductIndex] = useState(0);

  function incrementItems() {
    setItemsNumber(items + 1);
  }
  function decrementItems() {
    if (items > 0) {
      setItemsNumber(items - 1);
    } else {
      setItemsNumber(0);
    }
  }

  function toggleActive() {
    setIsActive(isActive);
  }

  function changeProductImage() {
    toggleActive();
    setProductIndex(hoveredIndex);
  }

  return (
    <div className="w-4/6 mx-auto mt-20 font-kumbh-sans flex flex-row gap-10">
      <div className="w-1/2">
        <img src={productimages[productIndex]} className="w-5/6 rounded-xl" />
        <div className="flex flex-row mt-5 justify-between w-5/6 ">
          {productthumbails.map((thumbnail, index) => {
            return (
              <img
                onMouseOver={() => {
                  setIsHovered(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredIndex(null);
                }}
                onClick={changeProductImage}
                key={index}
                src={thumbnail}
                className={`w-18 h-18 rounded-lg cursor-pointer ${
                  isHovered && hoveredIndex === index ? "opacity-50" : ""
                }
                  ${
                    isActive && productIndex === index
                      ? "border-3 border-Orange opacity-50"
                      : ""
                  }
                `}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-7 w-1/2">
        <p className="text-Dark-grayish-blue uppercase text-sm font-medium tracking-wide">
          Sneaker Company
        </p>
        <h1 className="mt-3 text-5xl font-bold text-Black">
          Fall Limited Edition Sneakers
        </h1>
        <p className="mt-8 text-Dark-grayish-blue leading-7">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="mt-2">
          <span className="text-3xl text-Black font-bold">$125.00</span>
          <span className=" ml-5 p-1 bg-Black rounded text-White">50%</span>
        </p>
        <p className="mt-2 text-Grayish-blue font-medium">
          <del>$250.00</del>
        </p>
        <div className="flex flex-row gap-5 mt-5">
          <div className="flex flex-row items-center w-1/3 justify-between bg-Light-grayish-blue rounded-lg p-3">
            <button
              onClick={decrementItems}
              className="text-3xl text-Orange font-bold cursor-pointer"
            >
              <img src="./images/icon-minus.svg" />
            </button>
            <span className="font-bold text-Black">{items}</span>
            <button
              onClick={incrementItems}
              className="text-3xl text-Orange font-bold cursor-pointer"
            >
              <img src="./images/icon-plus.svg" />
            </button>
          </div>
          <button
            onClick={CheckoutItems}
            className="w-2/3 bg-Orange text-Very-dark-blue font-bold rounded-lg flex flex-row items-center justify-center gap-3 p-4 shadow-lg cursor-pointer hover:bg-Pale-orange"
          >
            <img src="./images/icon-cart.svg" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

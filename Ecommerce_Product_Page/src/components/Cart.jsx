const Cart = () => {
  return (
    <div className="w-90 bg-White rounded-lg shadow-lg p-6 absolute top-12 right-0 font-kumbh-sans">
      <h4 className="text-Grayish-blue mb-3">Cart</h4>
      <hr className="border-t-1 border-Grayish-blue" />
      <div>
        <div className="mt-4 flex flex-row items-center gap-2">
          <img
            src="./images/image-product-1-thumbnail.jpg"
            className=" w-10 h-11"
          />
          <div>
            <p className="text-Grayish-blue">Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x 3 <span className="font-bold">$375.00</span>
            </p>
          </div>
          <img src="./images/icon-delete.svg" className="ml-4" />
        </div>
        <button className="w-full bg-Orange text-Very-dark-blue font-bold rounded-lg flex flex-row items-center justify-center gap-3 p-4 shadow-lg cursor-pointer hover:bg-Pale-orange mt-4">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;

const Header = () => {
  return (
    <header className="w-full mx-auto text-center my-4">
      <img src="logo.svg" className="block mx-auto" />
      <div>
        <h1 className="mt-12 text-2xl lg:text-4xl text-Gray-400 font-thin mb-4">
          We are launching
          <span className="text-Blue-950 font-bold"> soon!</span>
        </h1>
        <p className="text-lg font-thin text-Blue-950">
          Subscribe to get notified
        </p>
      </div>
    </header>
  );
};

export default Header;

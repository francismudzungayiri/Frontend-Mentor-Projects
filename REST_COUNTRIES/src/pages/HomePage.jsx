import CountryCountainer from "../components/CountryContainer";

const HomePage = ({ countries, loading, error }) => {
  return (
    <div className="w-full bg-Gray-50 min-h-screen">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {countries ? (
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
            justify-items-center w-full max-w-7xl mx-auto py-6"
        >
          {countries.map((country) => (
            <CountryCountainer key={country.name.common} country={country} />
          ))}
        </ul>
      ) : (
        ["No countries available."]
      )}
    </div>
  );
};

export default HomePage;

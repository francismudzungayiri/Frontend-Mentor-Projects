const CountryCountainer = ({ country }) => {
  return (
    <li className="w-64 m-4 bg-white rounded shadow">
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        className="w-full h-40 object-cover rounded-t"
      />
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Population: {country.population.toLocaleString()}</p>
      <p>Region: {country.region}</p>
    </li>
  );
};

export default CountryCountainer;

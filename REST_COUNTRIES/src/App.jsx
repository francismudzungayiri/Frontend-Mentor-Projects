import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";

const App = () => {
  const [allCountries, setAllCountries] = useState([]);
  {
    /*  const [visibleCountries, setVisibleCountries] = useState([]);*/
  }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,capital,currencies,population,region,flags"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllCountries(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              countries={allCountries}
              error={error}
              loading={loading}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;

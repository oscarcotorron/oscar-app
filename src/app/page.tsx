"use client"
import { useState } from "react";
import CountryList from "./components/CountryList/CountryList";
import SearchForm from "./components/SearchForm/SearchForm";
import styles from "./page.module.css";


async function fetchCountries(name: String): Promise<CountryDTO[]> {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>();

  const searchCountryByName = (name: String) => {
    if (name.length == 0) {
      setCountries([]);
      return
    }
    
    fetchCountries(name).then((data) => {
      const resultCountries: Country[] = data.map(countryDTO => {
        const { name, capital, population, flags } = countryDTO;
        return ({
          name: name.common,
          officialName: name.official,
          capital,
          population,
          flag: flags.png
        });
      });
      
      setCountries(resultCountries);
    });
  }

  return (
    <section>
      <SearchForm onSearch={searchCountryByName} />
      <CountryList countries={countries} />
    </section>
  );
}

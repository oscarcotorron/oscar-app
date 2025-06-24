import Country from "../Country/Country";
import "./CountryList.css";

interface CountryListProps {
    countries: Array<Country> | undefined;
}

export default function CountryList({ countries }: CountryListProps) {
    return(
        <div className="country-list">
            {countries?.map((country, i) => <Country key={i} country={country} />)}
        </div>
    );
}
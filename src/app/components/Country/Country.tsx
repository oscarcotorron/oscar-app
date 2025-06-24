
interface CountryProps {
    country: Country;
}

export default function Country({ country }: CountryProps) {
    const { name, officialName, capital, population, flag} = country;
    return (
        <div className="country">
            <img src={flag} />            
            <div>
                <div>
                    <span>Short Name:</span>
                    <span>{name}</span>
                </div>
                <div>
                    <span>Official Name:</span>
                    <span>{officialName}</span>
                </div>
                <div>
                    <span>Capital:</span>
                    <span>{capital}</span>
                </div>
                <div>
                    <span>Population:</span>
                    <span>{`${population} people`}</span>
                </div>
            </div>
        </div>
    );
}
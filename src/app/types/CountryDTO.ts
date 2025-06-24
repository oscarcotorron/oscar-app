interface NameData {
    common: String;
    official: String;
}

interface FlagsData {
    png: string;
}

interface CountryDTO {
    name: NameData;
    capital: String;
    population: Number;
    flags: FlagsData;
}
import "./SearchForm.css";

interface FormElements extends HTMLFormControlsCollection {
  countryNameInput: HTMLInputElement
}

interface CountryNameFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

interface SearchFormProps {
    onSearch: (name: String) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
    const onSubmit = (event: React.FormEvent<CountryNameFormElement>) => {
        event.preventDefault();
        onSearch(event.currentTarget.elements.countryNameInput.value);
    };

    return (
        <section className="search-form">
            <form onSubmit={onSubmit}>
                <label className="country-label" htmlFor="countryNameInput">Country Name:</label>
                <input className="text-field" type="text" id="countryNameInput" name="countryNameInput" />
                <input className="search-button" type="submit" value="Search" />
            </form>
        </section>
    );
}
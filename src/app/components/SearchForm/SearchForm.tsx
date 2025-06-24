import styles from "./page.module.css";

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
        <section>
            <form onSubmit={onSubmit}>
                <label htmlFor="countryNameInput">Country Name</label>
                <input type="text" id="countryNameInput" name="countryNameInput" />
                <input type="submit" value="Search" />
            </form>
        </section>
    );
}
import { useState } from "react";
import Results from "./results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value.toLowerCase()); //! To better search LowerCase
  };

  const handleResults = (items) => {
    setResults(items);
  };

  return (
    <div className="d-search">
      {results && (
        <p className="p-result">
          {" "}
          <b>{results.length} results</b>
        </p>
      )}

      <input
        className="i-search"
        type="text"
        onChange={handleChange}
        value={query}
        placeholder="Puedes buscar Productos, Paises o Nombres"
        autoFocus
      />
      <Results
        items={items}
        onItemSelected={onItemSelected}
        onResultsCalculated={handleResults}
        query={query}
      />
    </div>
  );
};

export default SearchBar;

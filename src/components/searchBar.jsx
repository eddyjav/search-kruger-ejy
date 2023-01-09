import { useState } from "react";
import Results from "./results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("al");
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
      {results && <div>{results.length} results</div>}
      <input
        className="i-search"
        type="text"
        onChange={handleChange}
        value={query}
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

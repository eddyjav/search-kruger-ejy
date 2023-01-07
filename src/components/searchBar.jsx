import { useState } from "react";
import Results from "./results";

const SearchBar = ({ items, onItemSelected }) => {
  const [query, setQuery] = useState("al");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleResults = (items) => {
    setResults(items);
  };

  return (
    <div>
      {results && <div>{results.length} results</div>}
      <input type="text" onChange={handleChange} value={query} />
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

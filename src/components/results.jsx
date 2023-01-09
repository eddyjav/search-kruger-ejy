import React from "react";
import { useState, useMemo, useEffect } from "react";
import MarkedItem from "./markedItem";

const Results = ({ items, onItemSelected, query, onResultsCalculated }) => {
  const [results, setResults] = useState([]);

  const filterItems = useMemo(() => findMatch(items, query), [items, query]);

  useEffect(() => {
    onResultsCalculated(results);
  }, [results]);

  function findMatch(items, query) {
    const res = items.filter((i) => {
      return i.title.toLowerCase().indexOf(query) >= 0 && query.length > 0;
    });

    setResults(res);
    return res;
  }

  return (
    <div className="d-result">
      {query !== ""
        ? filterItems.map((item) => (
            <MarkedItem
              key={crypto.randomUUID()}
              item={item}
              onClick={onItemSelected}
              query={query}
            />
          ))
        : ""}
    </div>
  );
};

export default Results;

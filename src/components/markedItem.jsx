import React from "react";
import { useMemo } from "react";

const MarkedItem = ({ item, query, onClick }) => {
  const { left, center, right } = useMemo(
    () => getPositions(item, query),
    [item, query]
  );

  function getPositions(item, query) {
    const index = item.title.toLowerCase().indexOf(query);
    const left = item.title.slice(0, index);
    const right = item.title.slice(index + query.length);
    const center = item.title.slice(index, index + query.length);

    return {
      left,
      center,
      right,
    };
  }

  const handleClick = () => {
    onClick(item);
  };

  return (
    <a href="#" className="resultBotton" onClick={handleClick}>
      {left}
      <span
        className="s-search"
        style={{ fontWeight: "bolder", backgroundColor: "#fd7d14d2" }}
      >
        {center}
      </span>
      {right}
    </a>
  );
};

export default MarkedItem;

import React from "react";
import "../styles/SortOptions.scss";

interface SortOptionsProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortOption,
  setSortOption,
}) => {
  return (
    <select
      className="sort-options"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="">Default sorting</option>
      <option value="price-asc">Price: Low to high</option>
      <option value="price-desc">Proce: High to low</option>
      <option value="title-asc">Name: A-Z</option>
      <option value="title-desc">Name: Z-A</option>
    </select>
  );
};

export default SortOptions;

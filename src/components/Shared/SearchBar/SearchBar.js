import React from "react";
import "./SearchBar.css";
// <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">

function SearchBar({ value, onChange }) {
  return (
    <div className="searchBar__wrapper">
      <div className="searchBar__label">Submit your search</div>
      <div className="searchBar__searchBar">
        <input
          onChange={onChange}
          value={value}
          className="searchBar__searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default SearchBar;

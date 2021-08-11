import "./searchinput.scss";

import React from "react";
import SearchIcon from "../../Assets/Icons/searchicon.svg";

function SearchInput() {
  return (
    <div className="search_input">
      <input placeholder="Start your search" />
      <a className="search-bar" href="/">
        <img src={SearchIcon} alt="search" />{" "}
      </a>
    </div>
  );
}

export default SearchInput;

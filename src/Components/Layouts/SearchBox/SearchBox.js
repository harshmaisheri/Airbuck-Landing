import "./searchbox.scss";

import React from "react";
import SearchIcon from "../../../Assets/Icons/searchicon.svg";

function SearchBox({ id }) {
  return (
    <React.Fragment>
      <div className="search_container">
        <button className={`location ${id === "2" && "tab2"}`}>
          <p>Location</p>
          <span>Where are you going?</span>
        </button>
        {id === "1" ? (
          <>
            <button className="check_in">
              <p>Check in</p>
              <span>Add dates</span>
            </button>
            <button className="check_out">
              <p>Check out</p>
              <span>Add dates</span>
            </button>
            <button className="guest">
              <p>Guest</p>
              <span>Add Guest</span>
            </button>
          </>
        ) : (
          <button className="date">
            <p>Date</p>
            <span>Add when you want to go</span>
          </button>
        )}
      </div>
      <a className="search" href="/">
        <img src={SearchIcon} alt="search" />{" "}
      </a>
    </React.Fragment>
  );
}

export default SearchBox;

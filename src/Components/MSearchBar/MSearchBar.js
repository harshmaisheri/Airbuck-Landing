import "./MSearchBar.scss";

import React, { useEffect } from "react";

import SearchIconPink from "../../Assets/Icons/searchicon_pink.svg";

function MSearchBar() {
  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const scroll = document.getElementById("searchLocation");
    if (window.innerWidth < 767) {
      if (window.pageYOffset > 0) {
        scroll.classList.add("show-background");
        scroll.classList.remove("hide-background");
      } else {
        scroll.classList.add("hide-background");
        scroll.classList.remove("show-background");
      }
    }
  };

  return (
    <div className="mob_searchBox">
      <img src={SearchIconPink} alt="" />
      <h5>Where are you going?</h5>
    </div>
  );
}

export default MSearchBar;

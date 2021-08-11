import "./Header.scss";

import React, { useEffect, useState } from "react";
import { TabContent, TabPane } from "reactstrap";

import MSearchBar from "../../MSearchBar/MSearchBar";
import SearchBox from "../SearchBox/SearchBox";
import SearchInput from "../../SearchInput/SearchInput";
import avatar from "../../../Assets/Icons/avatar.svg";
import logoPink from "../../../Assets/Icons/logoPink.svg";
import logoWhite from "../../../Assets/Icons/logo.svg";
import menu from "../../../Assets/Icons/hamburger.svg";
import webIconBlack from "../../../Assets/Icons/webicon_black.svg";
import webIconWhite from "../../../Assets/Icons/webicon_white.svg";

function Header() {
  const [activeTab, setActiveTab] = useState("1");
  const [fixedHeader, setFixedHeader] = useState(true);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, []);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    const scroll = document.getElementById("scrollLoc");
    if (window.innerWidth > 767) {
      if (window.pageYOffset > 0) {
        scroll.classList.add("show-menu");
        scroll.classList.remove("hide-menu");
        setFixedHeader(false);
      } else {
        scroll.classList.add("hide-menu");
        scroll.classList.remove("show-menu");
        setFixedHeader(true);
      }
    }
  };

  return (
    <React.Fragment>
      <header id="scrollLoc">
        <div className="logo">
          <img
            src={fixedHeader ? logoWhite : logoPink}
            className="App-logo"
            alt="logo"
          />
        </div>
        <div
          className="tab_list"
          data-aos={`${!fixedHeader && "zoom-out-down"}`}
        >
          <div className="text_btn">
            <button onClick={() => toggle("1")}>
              <span>Place To Stay</span>
              {activeTab === "1" && <div className="borderBottom" />}
            </button>
          </div>
          <div className="text_btn">
            <button onClick={() => toggle("2")}>
              <span>Experiences</span>
              {activeTab === "2" && <div className="borderBottom" />}
            </button>
          </div>
          <div className="text_btn">
            <button>
              <span>Online Experiences</span>
            </button>
          </div>
        </div>

        {!fixedHeader && <SearchInput />}
        <div className="m_search" id="searchLocation">
          <MSearchBar />
        </div>
        <div className="profiles">
          <button className="host_btn">
            <span>Become a host</span>
          </button>
          <button className="language">
            <div className="web_icon">
              <img
                src={`${fixedHeader ? webIconWhite : webIconBlack}`}
                alt="web"
              />
            </div>
          </button>

          <div className="menu">
            <img src={menu} alt="menu" />
            <img src={avatar} alt="avatar" />
          </div>
        </div>
        <TabContent
          activeTab={activeTab}
          className={`${fixedHeader ? "animate-start" : "animate-end"}`}
          data-aos={`${!fixedHeader && "zoom-out-down"}`}
        >
          <TabPane tabId="1">
            <SearchBox id="1" />
          </TabPane>
          <TabPane tabId="2">
            <SearchBox id="2" />
          </TabPane>
        </TabContent>
      </header>
    </React.Fragment>
  );
}

export default Header;

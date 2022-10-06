import React, { useState, useEffect } from "react";

import "../App.css";
import Logo from "../Images/YouTube-Logo.wine.svg";
import Card from "./Card";
import MenuList from "./MenuList";

const SerachBar = () => {
    const [search, setSearch] = useState("pawan");
    const [getData, setData] = useState([]);
    const API_KEY = "AIzaSyA8X9LoZNiMl1mp0RxjtwUaqyLAU-D4iv8";
    const channelsLine = "https://www.googleapis.com/youtube/v3/channels?"


const submitFormData = async  (e) => {
    e?.preventDefault();
    
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&maxResults=10000&q=${search}&key=${API_KEY}`);
    const response = await data.json();
    
    setData(response);

    
    
}


useEffect(() => {
    submitFormData();
}, [])


  return (
    <>
      <section>
        <div className="container_search">
          <div className="logo">
            <img src={Logo} alt="youtube logo" />
          </div>

          <div className="search_icon">
            <form action="" onSubmit={submitFormData}>
              <input type="text"  placeholder="Search" onChange={(e) => setSearch(e.target.value)}/>
              <button>
              <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="menu_icon">
                <MenuList />
          </div>
        </div>
      </section>

      <Card youtubeData={getData}/>
    </>
  );
};

export default SerachBar;

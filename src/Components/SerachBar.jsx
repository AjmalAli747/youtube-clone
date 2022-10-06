import React, { useState, useEffect } from "react";

import "../App.css";
import Logo from "../Images/YouTube-Logo.wine.svg";
import MenuList from "./MenuList";

const SerachBar = () => {
    const [search, setSearch] = useState("pawan");
    const [getData, setData] = useState([])


const submitFormData = async  (e) => {
    e?.preventDefault();
    console.log(search)
    const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&maxResults=1000&q=${search}&key=AIzaSyACoPOaRp4b-zqTql-yo-Pjydz7wRdmD8I`);
    const response = await data.json();
    setData(response);


    console.log(getData)
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
    </>
  );
};

export default SerachBar;

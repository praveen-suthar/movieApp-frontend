import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentAdd } from "react-icons/bi";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import {ENGLISHTEXT, apiURL} from '../common/englishText.js'

const NavBar = ({ setResults, sortDescending, sortAscending }) => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  const [input, setInput] = useState("");

  // Search functionality 
  const fetchData = (value) => {
    axios.get(apiURL).then((response) => {
      const json = response.data;
      const results = json.filter((user) => {
        return (
          value &&
          user &&
          user.title &&
          user.title.toLowerCase().includes(value)
        );
      });
      setResults(results);
    });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top" style={{backgroundColor:"#e3f2fd"}}>
        <div className="container-fluid ">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link to="/" className="text-decoration-none text-dark">
                    <AiOutlineHome/> {ENGLISHTEXT.NAVBAR.HOME}
                  </Link>{" "}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link to="/addmovie" className="text-decoration-none text-dark">
                    {" "}
                    <BiCommentAdd /> {ENGLISHTEXT.NAVBAR.ADD}
                  </Link>{" "}
                </span>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineSortAscending onClick={sortAscending} /> {ENGLISHTEXT.NAVBAR.ASC}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <AiOutlineSortDescending onClick={sortDescending} /> {ENGLISHTEXT.NAVBAR.DES}
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className={`btn ${
                  theme === "dark" ? "btn-light" : "btn-dark"
                } border mx-5`}
                onClick={handleOnClick}
              style={{boxShadow:"none"}} 
                >
                {theme === "dark" ? "light" : "dark"}
              </button>
              <form className="d-flex">               
                <input
                  className="form-control me-2"
                  type="search" 
                  placeholder={ENGLISHTEXT.NAVBAR.SEARCH_MOVIE_PLACEHOLDER}
                  aria-label="Search"
                  value={input}
                  onChange={(e) => handleChange(e.target.value)}
                  style={{boxShadow:"none"}}                  
                />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

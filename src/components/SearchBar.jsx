import React from "react";
import "./Components.css";
import { useState, useEffect } from 'react';
import BrewCard from "./BrewCard";

function SearchBar () {

const urlAPI = "https://api.openbrewerydb.org/breweries?by_name=";

const [query, setQuery] = useState("");
const [breweries, setBreweries] = useState([]);

//search func
const searchBrew = async () => {
  const url = urlAPI + query
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  setBreweries(data);
};

useEffect(() =>{
  searchBrew();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

const handleSubmit = event => {
  event.preventDefault()
  searchBrew();
}

return(
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Breweries"
                className="form-control"
                value={query}
            />
            <input
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
        <div className="breweries">
            {breweries 
                ? breweries.map(brewery => 
                    (<BrewCard key={brewery.id} brewery={brewery}/>)
                    )
                : "No Breweries"}
            </div>
        </div>   
    )
};
export default SearchBar;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Brew(){
    let params = useParams ();
    const [details, setdetails] = useState({});
    const fetchDetails = async () => {
      console.log(params.name)
      const data = await fetch(
        `https://api.openbrewerydb.org/breweries/${params.name}`
      );
      const detailData = await data.json();
      setdetails(detailData);
    };
    useEffect(() => {
        fetchDetails();
      }, [params.name]);

    const navigate = useNavigate();
      function handleClick() {
        navigate("/");
      }

    return(
      <div className="brewery-container">
        <div className="brewery-img-container">
          <img className="brewery-img" src={require("../static/brewery_sample.jpg")} alt="Brewery Sample Image" />
        </div>
        <div className="brewery-detail">
          {details.name ? <p>Name: {details.name}</p> : <></>}
          {details.street ? <p>Street Address: {details.street}</p> : <></>}
          {details.city ? <p>City: {details.city}</p> : <></>}
          {details.address_2 ? <p>Second Address: {details.address_2}</p> : <></>}
          {details.address_3 ? <p>Other Address: {details.address_3}</p> : <></>}
          {details.brewery_type ? <p>Brew Type: {details.brewery_type}</p> : <></>}
          {details.country_province ? <p>Country Province: {details.country_province}</p> : <></>}
          {details.state ? <p>State: {details.state}</p> : <></>}
          {details.postal_code ? <p>Postal Code: {details.postal_code}</p> : <></>}
          
          <button type="button" className="brew-back-btn" onClick={handleClick}>
            Go Back
          </button>
        </div>
      </div>
    )
}
export default Brew;

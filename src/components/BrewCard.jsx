import React from "react";
import "./Components.css";
import { Link } from "react-router-dom";

const BrewCard = ({brewery}) => {
    const{
        id,
        name,
        brewery_type,
        city,
    } = brewery;

    return(
        <div className="card">
            <div className="card-body">
                <h3>{name}</h3>
                <h3>{brewery_type}</h3>
                <h3>{city}</h3>
                <Link to={"/brew/" + id} className="card-detail">
                    <p className="view-detail">View Detail</p>
                </Link>

            </div>
        </div>
    );
};

export default BrewCard;
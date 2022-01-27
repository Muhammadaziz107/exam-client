import React from "react";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import restaurant from "../../assets/images/restaurant.jpg";
import "./restaurants.css";

function Restaurants() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(async () => {
    const res = await fetch(`http://localhost:4000/restaurant/${categoryId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      const request = await res.json();
      setData(request);
    }
  }, []);

  useEffect(() => {}, [data]);
  return (
    <>
      <NavLink to="/" className="back-btn">
        Home
      </NavLink>
      <div className="restaurants__wrapper">
        {data &&
          data.map(e => (
            <div className="restaurants" key={e.restaurant_id}>
              <NavLink
                className="restaurants__link"
                to={`/restaurant/${e.restaurant_id}`}
              >
                <img src={restaurant} alt="restaurant img" width="400" height="400" />
                <p className="restaurants__text">{e.restaurant_name}</p>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}

export default Restaurants;

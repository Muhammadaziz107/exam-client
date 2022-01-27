import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./category.css";
import category from "../../assets/images/category.jpg";

function Category() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const res = await fetch("http://localhost:4000/category", {
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
      <div className="category__wrapper">
        {data &&
          data.map(e => (
            <div className="categories" key={e.category_id}>
              <NavLink className="categories__link" to={`/${e.category_id}`}>
                <img src={category} alt="category img" width="400" height="400" />
                <p className="categories__text">{e.category_name}</p>
              </NavLink>
            </div>
          ))}
      </div>
    </>
  );
}

export default Category;

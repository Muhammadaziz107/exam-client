import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./products.css";
import cart from "../../assets/images/cart.png";

function Products() {
  const [data, setData] = useState([]);
  const { restaurantId } = useParams();
  const [message, setMessage] = useState("");

  useEffect(async () => {
    const res = await fetch(`http://localhost:4000/product/${restaurantId}`, {
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
      <div className="products__wrapper">
        <h2>{message}</h2>
        {data &&
          data.map(e => (
            <div key={e.product_id} className="products">
              <img
                className="product__img"
                src={e.product_img}
                alt="product img"
                width="300"
                height="300"
              />
              <p className="products__text"> {e.product_name}</p>
              <p className="products__text">Narxi: {e.product_price} so'm</p>
              <button className="cart">
                <img src={cart} alt="cart img" width="30" height="30" />
              </button>
            </div>
          ))}
      </div>
    </>
  );
}
export default Products;

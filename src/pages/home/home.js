import { NavLink } from "react-router-dom";
import "./home.css";
import { useRef, useEffect, useState } from "react";

import Category from "../../components/category/category";
import Restaurants from "../../components/restaurants/restaurants";
import korzina from "../../assets/images/korzina.png";

import close from "../../assets/images/close.png";

function Home() {
  const elDiv = useRef(null);
  const elName = useRef(null);
  const elAddress = useRef(null);
  const elPhone = useRef(null);
  const message = useRef(null);

  const openModal = () => {
    elDiv.current.classList.add("modal--active");
  };
  const closeModal = () => {
    elDiv.current.classList.remove("modal--active");
  };

  //new order

  async function handleCreateNew(evt) {
    evt.preventDefault();

    const res = await fetch("http://localhost:4000/newOrder", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: elName.current.value,
        address: elAddress.current.value,
        phone: elPhone.current.value,
      }),
    });

    if (res.status === 200) {
      message.current.textContent = "created successfully✅";
    }
  }

  return (
    <>
      <div>
        <h1 className="heading">Welcome to our Website</h1>
        <div className="korzina">
          <NavLink className="korzina__link" to="/korzina">
            <img src={korzina} alt="korzina png" width={50} height={50} />
            <p className="korzina__text">korzina</p>
          </NavLink>
        </div>
        <div>
          <button type="button" className="orders" onClick={openModal}>
            send order
          </button>
        </div>

        <Category />
        <Restaurants />
      </div>

      {/* modal */}

      <div className="modal" ref={elDiv}>
        <form className="form" onSubmit={handleCreateNew}>
          <button className="form__close" onClick={closeModal} type="button">
            <img src={close} alt="close btn" width={20} height={20} />
          </button>
          <h2 className="form__heading">Send Order</h2>
          <h3 ref={message}></h3>
          <input className="form__input" type="text" placeholder="name" ref={elName} />
          <input
            className="form__input"
            type="text"
            placeholder="address"
            ref={elAddress}
          />
          <input className="form__input" type="text" placeholder="phone" ref={elPhone} />
          <button className="form__send" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Home;

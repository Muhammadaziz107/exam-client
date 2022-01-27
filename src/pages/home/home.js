import { NavLink } from "react-router-dom";
import "./home.css";

import Category from "../../components/category/category";
import Restaurants from "../../components/restaurants/restaurants";
import korzina from "../../assets/images/korzina.png";
function Home() {
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
        <Category />
        <Restaurants />
      </div>
    </>
  );
}
export default Home;

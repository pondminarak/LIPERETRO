import LRbar from "../bar/Bar";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import Home_disp from "./home_dp1";
import Home_disp1 from "./home_dp1";
import Home_disp2 from "./home_dp2";
import Home_disp3 from "./home_dp3";
import Home_disp4 from "./home_dp4";

function Home() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    let res = await axios.get("http://localhost:1337/suggests");
    // console.log(res);
    setData(res.data);
  }, []);

  const [popup, setPopup] = useState(false);

  const toggleShowDialog = () => {
    setPopup(!popup);
    // console.log("clicked");
  };

  return (
    <>
      <LRbar/>
      <div className="suggest">Suggest</div>
      <div className="cardbox">
        <Home_disp1/>
        <Home_disp2/>
        <Home_disp3/>
        <Home_disp4/>

        <div className="box-btn">
          <a href="package" className="btn">
            {" "}
            Package{" "}
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;

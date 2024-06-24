import * as React from "react";
import LRbar from "../bar/Bar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./status.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ButtonLogin from "../bar/Button-login";

export default function Statuspackage() {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   let res = await axios.get(
  //     `http://localhost:1337/bookings?users_permissions_users=${localStorage.getItem(
  //       "userID"
  //     )}`
  //   );
  //   setData(res.data);
  //   // console.log(res)
  // }, []);

  return (
    <>
      <LRbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="backgrand-status1">
        <h1 className="Text-status">STATUS</h1>
            <div>
              <p className="status-border">
                <div className="Box-Usename1">
                  <div className="Box-Usename2">
                    <AccountCircleIcon fontSize="large"></AccountCircleIcon>
                    <h2 className="Usename">
                      Mark
                    </h2>
                  </div>
                  <h2 className="Package-status">Package 3999</h2>
                </div>

                <div className="Box-H-M">
                  <div className="Hotel">
                    <h2>Hotel</h2>
                    <h5 className="NameHotel">Lipe Beach Resort</h5>
                    <img
                      src='https://media-cdn.tripadvisor.com/media/photo-s/06/f2/84/d7/lipe-beach-resort.jpg'
                    ></img>
                  </div>
                  <div className="Meal">
                    <h2>Meal</h2>
                    <h5 className="NameMeal">Beef Bulgare</h5>
                    <img
                      src='https://www.centarahotelsresorts.com/centaragrand/sites/g/files/yplzxh121/files/2022-01/Centara%20Ladprao_Blue%20Sky%20_Mix%20Grill%20Australian%20beef.jpg'
                    ></img>
                  </div>
                </div>

                <h1 className="topic-Additional">Additional:</h1>
                <div className="text-additional">
                  <div className="Additional">แพ้กุ้ง แพ้หอยนางรม</div>
                </div>

                <h1 className="topic-Adult">Person</h1>
                <div className="person-num">1 Person</div>

                
                <h1 className="topic-Status">Payment Status</h1>
                <div className="Paidstatus">PAID</div>
                <div className="Evidence1">
                  <h2 className="Evidence">Evidence</h2>
                  <img src='https://www.microsuck.net/wp-content/uploads/2019/09/1-592x1024.png'/>
                </div>

                <div className="Total1">
                  <h2 className="Total">TOTAL</h2>
                  <div className="price">3999 ฿</div>
                </div>
                <div>

                </div>
              </p>
              
            </div>

        
        <div className="home1">
                <Link to="/home" className="home-btn">
                  Home
                </Link>
              </div>
      </div>
    </>
  );
}

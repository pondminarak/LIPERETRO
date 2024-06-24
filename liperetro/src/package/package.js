import React, { useState, useEffect } from "react";
import "./package.css";
import LRbar from "../bar/Bar";
import axios from "axios";
import { Link } from "react-router-dom";
import ButtonLogin from "../bar/Button-login";

function Package() {
  // const [data, setData] = useState([]);
  // useEffect(async () => {
  //   let res = await axios.get("http://localhost:1337/packages");
  //   console.log(res);
  //   setData(res.data);

  // }, []);
  return (
    <>
      <LRbar />
      <link
        href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap"
        rel="stylesheet"
      />
      <section class="package">
        {/* <CssBaseline />*/}
        <div class="row">
          <div class="image">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NiFiG-0DoQE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="content1">
            <h3>LIPE RETRO</h3>
            <p>
              LIPE RETRO is a touring company that co-operating with local to
              ensured customer will get the best experience with Koh Lipe as
              much as possible, with our latest, modern and passionate touring
              system, customer can enjoy their trip to Koh Lipe without any
              concerned. We hope you get the best memorable part of your life
              here!!!
            </p>
          </div>
        </div>

        <section className="package1">
          <h1 class="heading">
            <span>P</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
            <span>A</span>
            <span>G</span>
            <span>E</span>
            <span>S</span>
          </h1>
          <div class="box-container">

                    <div class="box">
                        <img width={200} src='https://www.chillpainai.com/src/wewakeup/scoop/images/fce7dfb893d9fba720de7afa9274f405d6576fa8.jpg' alt=""/>
                            <div class="content">
                                <h3 style={{ color: "#6AB7D6" }}>  Package 1999 </h3>
                                <p style={{ color: "rgb(68, 68, 68)" }}>In this 1999฿ Package is including with 3 island tour and a free 1 meal at your place
                feel free to choose what you like with to following Hotel/Motel and Meal.</p>                                
                                <div class="price-package" style={{ color: "#6AB7D6" }}> 1999 ฿</div>
                                <a href="package/1999" class="btn">book now</a>                                
                            </div>
                    </div>
                    <div class="box">
                        <img width={200} src='https://www.chillpainai.com/src/wewakeup/scoop/images/2653e8c3228b8245308f00ad1cffe403c0ce5ea1.jpg' alt=""/>
                            <div class="content">
                                <h3 style={{ color: "#6AB7D6" }}>  Package 2999 </h3>
                                <p style={{ color: "rgb(68, 68, 68)" }}>In this 2999฿ Package is including with 6 island tours, 3 outdoor activities and free 2 meals at your place feel free to choose what you like with to following Hotel/Motel and Meal.</p>                                
                                <div class="price-package" style={{ color: "#6AB7D6" }}> 2999 ฿</div>
                                <a href="package/2999" class="btn">book now</a>                                
                            </div>
                    </div>
                    <div class="box">
                        <img width={200} src='https://www.chillpainai.com/src/wewakeup/scoop/images/c058355a876f88a6a1113b4c7c54b30ceddf4021.jpg' alt=""/>
                            <div class="content">
                                <h3 style={{ color: "#6AB7D6" }}>  Package 3999 </h3>
                                <p style={{ color: "rgb(68, 68, 68)" }}>In this 3999฿ Package is including with 9 island tours, 3 outdoor activities, camping and a free 1 meal at your place feel free to choose what you like with to following Hotel/Motel and Meal.</p>                                
                                <div class="price-package" style={{ color: "#6AB7D6" }}> 3999 ฿</div>
                                <a href="package/3999" class="btn">book now</a>                                
                            </div>
                    </div>

                   
          </div>

                <div class='back'>
                   <a href="home" class="btn"> back </a> 
                </div>
          
          {/* <div class="box-container">
            {data.map((item) => {
              console.log(item)
              return (
                <div class="box">
                  <img
                    width={200}
                    src='https://www.chillpainai.com/src/wewakeup/scoop/images/fce7dfb893d9fba720de7afa9274f405d6576fa8.jpg'
                    alt=""
                  />
                  <div class="content">
                    <h3 style={{ color: "#6AB7D6" }}>Package 1999</h3>

                    <p style={{ color: "rgb(68, 68, 68)" }}>

                    </p>

                    <div class="price-package" style={{ color: "#6AB7D6" }}>
                      1999 ฿
                    </div>
                    <a href={`packageChoose/${item.id}`} class="btn">
                      Book now
                    </a> */}

                    {/* <div class="back">
                      <a href="home" class="btn">
                        {" "}
                        Back{" "}
                      </a>
                    </div> */}
          {/* </div> */}
        </section>
      </section>
    </>
)
}

export default Package;

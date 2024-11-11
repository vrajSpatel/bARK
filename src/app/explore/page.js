'use client'

import "../explore/explore.css";
import field from "../api/api.js";
import Image from 'next/image'

const explore = () => {
  //   console.log(field);
  var field1 = JSON.parse(field);
  console.log(field1.field.health);

  return (
    <>
      <div className="homemain">
        <div className="introtext">
          <h1>
            Find Best In <br /> Every Profession{" "}
          </h1>
        </div>

        <div className="searchbars">
          <div className="inputsearch">
            <input
              type="text"
              id="service"
              placeholder="what service you looking for? "
            />
            <input type="text" id="pincode" placeholder="Pincode" />
          </div>
          <div className="searchbutton">Search</div>
        </div>

        <div className="optionavailable">
          <h1 className="professions">Professions</h1>
          <h3>( that are mostly trendy )</h3>

          <div className="options">

            <div className="container_option">
              <div className="op">household</div>
              <div className="op">Health</div>
              <div className="op">Sports</div>
              <div className="op">Fitness</div>
              <div className="op">Entertainment</div>
              <div className="op">Food Service</div>
              <div className="op">Music</div>
              <div className="op">Production</div>
              <div className="op">Wedding</div>
              <div className="op">Bussniess</div>
            </div>

          </div>
        </div>

        <div className="subselection">
          <div className="headingoption">
            <h1>HouseHold</h1>
            <div className="contianer_options">
              {
                field1.field.household.map((Element, index) => {
                  if (index < 6) {
                    return <div className="card" key={index}>
                      <div className="img_card">
                        <Image src={Element.image} alt="si" />
                      </div>
                      <div className="container">
                        <h4><b>{Element.name}</b></h4>
                      </div>
                    </div>
                  }
                })
              }
            </div>
          </div>

          <div className="headingoption">
            <h1>Health</h1>
            <div className="contianer_options">
              {
                field1.field.health.map((Element, index) => {
                  if (index < 6) {
                    return <div className="card" key={index}>
                      <div className="img_card">
                        <Image src={Element.image} alt="si" />
                      </div>
                      <div className="container">
                        <h4><b>{Element.name}</b></h4>
                      </div>
                    </div>
                  }
                })
              }
            </div>
          </div>

          <div className="headingoption">
            <h1>Sports and Fitness</h1>
            <div className="contianer_options">
              {
                field1.field.SAF.map((Element, index) => {
                  if (index < 6) {
                    return <div className="card" key={index}>
                      <div className="img_card">
                        <Image src={Element.image} alt="si" />
                      </div>
                      <div className="container">
                        <h4><b>{Element.name}</b></h4>
                      </div>
                    </div>
                  }
                })
              }
            </div>
          </div>

          <div className="headingoption">
            <h1>Entertainment</h1>
            <div className="contianer_options">
              {
                field1.field.entertainment.Children.map((Element, index) => {
                  if (index < 6) {
                    return <div className="card" key={index}>
                      <div className="img_card">
                        <Image src={Element.image} alt="si" />
                      </div>
                      <div className="container">
                        <h4><b>{Element.name}</b></h4>
                      </div>
                    </div>
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default explore;

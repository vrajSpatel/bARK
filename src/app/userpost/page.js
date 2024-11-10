"use client";

import { useContext, useEffect, useState } from "react";
import "../userpost/userpost.css";
import { apiContext } from "@/lib/Context/apiContext";

const userpost = () => {
  var [userpost, setUserPost] = useState([]);
  const [viewpost, setviewpost] = useState();
  var [filter, setfilter] = useState({ name: "Dharmik patel" });
  const { fetchUserPostAPI } = useContext(apiContext);
  useEffect(() => {
    fetchUserPostAPI(filter).then((result) => {
      setUserPost(result);
      if (result && result.length !== 0) {
        setviewpost(result[0]);
      }
    });
  }, []);

  function changeinfo(element) {
    setviewpost(element);
  }
  return (
    <>
      <h1>User-Post</h1>

      <div className="container_userpost">
        <div className="center_container">
          <div className="cards_all">
            {userpost?.map((element, index) => {
              return (
                <div
                  key={index}
                  className="userpostcard"
                  onClick={() => {
                    changeinfo(element);
                  }}
                >
                  <div className="infoanddr">
                    <div className="name">{element?.name}</div>
                    <div className="address">{element?.address}</div>
                  </div>
                  <div className="field">{element?.field}</div>
                  <div className="urgent">
                    {element?.urgent ? <p>true</p> : <p>false</p>}
                  </div>
                </div>
              );
            })}
          </div>
          {viewpost && (
            <div className="alldetail">
              <div className="continer_alldetail">
                <h3>{viewpost?.field}</h3>
                <div className="detail">
                  <div className="linedetail">
                    <b> Name</b> : {viewpost?.name}
                  </div>

                  <div className="linedetail">
                    <b>Urgent</b> :{" "}
                    {viewpost?.urgent ? (
                      <span>Available</span>
                    ) : (
                      <span>Not avialable</span>
                    )}
                  </div>
                  <div className="linedetail">
                    <b>Nationwide</b> :{" "}
                    {viewpost?.nationWide ? (
                      <span>Available</span>
                    ) : (
                      <span>Not avialable</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default userpost;

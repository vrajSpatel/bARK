"use client";
const { createContext, useState } = require("react");

export const apiContext = createContext(0);

export const ApiProvider = ({ children }) => {
  const serverUrl = "http://localhost:3000/api";
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const signinAPI = async ({ email, password }) => {
    //validate both input
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    try {
      var response = await fetch(`${serverUrl}/signin`, {
        method: "POST",
        body: data,
      });
      response = await response.json();
      if (response.error) {
        console.log(response.error);
        setErrorMessage(response.error);
      }else if(response.success){
        setSuccessMessage(response.error);
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <apiContext.Provider value={{ signinAPI }}>{children}</apiContext.Provider>
  );
};

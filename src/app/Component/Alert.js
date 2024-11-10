"use client";
import { apiContext } from "@/lib/Context/apiContext";
import { useContext, useEffect } from "react";

const Alert = () => {
  const { errorMessage, setErrorMessage, successMessage, setSuccessMessage } =
    useContext(apiContext);
  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage(null);
      }, [3000]);
    }
  }, [errorMessage]);
  useEffect(() => {
    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage(null);
      }, [3000]);
    }
  }, [successMessage]);
  return (
    <>
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {successMessage && <div className="successMessage">{successMessage}</div>}
    </>
  );
};

export default Alert;

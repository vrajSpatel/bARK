"use client";

import { usePathname, useRouter } from "next/navigation";
import { getCookie, setCookie } from "../utils/cookies";
const { createContext, useState, useRef, useEffect } = require("react");

export const apiContext = createContext(0);

export const ApiProvider = ({ children }) => {
  const serverUrl = "http://localhost:3000/api";
  const router = useRouter();
  const pathname = usePathname();
  const auth_token = useRef(null);
  const professionalUser = useRef(null);
  const pendingProcess = useRef(null);
  const [uiLoading, setUiLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  useEffect(() => {
    setUiLoading(true);
    auth_token.current = getCookie("auth_token");
    professionalUser.current = getCookie("professional");
    pendingProcess.current = getCookie("pendingProcess");
    if (
      pathname !== "/signin" &&
      pathname !== "/signup" &&
      pathname !== "/signup/professionaluser" &&
      pathname !== "/signup/userdetail"
    ) {
      // console.log("validating");
      validatePendingProcess();
    }
    setUiLoading(false);
  }, [pathname]);
  // useEffect(() => {
  //   console.log(pathname);
  // });

  //util functions
  const validatePendingProcess = () => {
    if (pendingProcess.current === "1") {
      if (professionalUser.current === "0") {
        router.push("/signup/userdetail");
        //redirect user to userdetails
      } else if (professionalUser.current === "1") {
        //redirect user to userdetails
        router.push("/signup/professionaluser");
      }
    }
  };

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
        setErrorMessage(response.error);
        return;
      } else if (response.success) {
        console.log(response.success);
        setSuccessMessage(response.success);
        setCookie("auth_token", response.auth_token, 10);
        setCookie("professional", response.professional, 10);
        setCookie("pendingProcess", response.pendingProcess, 10);
        auth_token.current = response.auth_token;
        professionalUser.current = response.professional;
        pendingProcess.current = response.pendingProcess;
        if (pendingProcess.current === "1") {
          validatePendingProcess();
        } else {
          router.push("/");
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const signupAPI = async ({ email, password, professional }) => {
    //validate all input
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("professional", professional);
    try {
      var response = await fetch(`${serverUrl}/signup`, {
        method: "POST",
        body: data,
      });
      response = await response.json();
      if (response.error) {
        setErrorMessage(response.error);
        return;
      } else if (response.success) {
        setSuccessMessage(response.success);
        setCookie("auth_token", response.auth_token, 10);
        setCookie("professional", response.professional, 10);
        setCookie("pendingProcess", "1", 10);
        auth_token.current = response.auth_token;
        professionalUser.current = response.professional;
        pendingProcess.current = "1";
        if (pendingProcess.current === "1") {
          validatePendingProcess();
        } else {
          router.push("/");
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateUserAPI = async (userData) => {
    //validate all input

    const data = new FormData();
    Object.keys(userData).map((element) => {
      if (typeof userData[element] === "string") {
        data.append(element, userData[element]);
      } else {
        data.append(element, JSON.stringify(userData[element]));
      }
    });
    try {
      var response = await fetch(`${serverUrl}/updateUser`, {
        method: "POST",
        headers: { auth_token: auth_token.current },
        body: data,
      });
      response = await response.json();
      if (response.error) {
        setErrorMessage(response.error);
        return;
      } else if (response.success) {
        setSuccessMessage(response.success);
        setCookie("pendingProcess", "0", 10);
        pendingProcess.current = "0";
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserAPI = async () => {
    try {
      if (!auth_token.current) {
        return;
      }
      var response = await fetch(`${serverUrl}/fetchUser`, {
        method: "POST",
        headers: { auth_token: auth_token.current },
      });
      response = await response.json();
      if (response.error) {
        setErrorMessage(response.error);
        return;
      } else if (response.success) {
        setSuccessMessage(response.success);
        return response.userData;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUserPostAPI = async (filters) => {
    if (professionalUser.current === "0") {
      setErrorMessage(
        "You neet to signup as a professional user to view user posts!"
      );
      return;
    }
    const data = new FormData();
    Object.keys(filters).map((element) => {
      data.append(element, filters[element]);
    });
    try {
      if (!auth_token.current) {
        return;
      }
      var response = await fetch(`${serverUrl}/fetchPosts`, {
        method: "POST",
        headers: { auth_token: auth_token.current },
        body: data,
      });
      response = await response.json();
      console.log(response);
      if (response.error) {
        setErrorMessage(response.error);
        return;
      } else if (response.success) {
        setSuccessMessage(response.success);
        return response.userData;
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <apiContext.Provider
      value={{
        auth_token,
        uiLoading,
        setUiLoading,
        errorMessage,
        setErrorMessage,
        successMessage,
        setSuccessMessage,
        validatePendingProcess,
        signinAPI,
        signupAPI,
        updateUserAPI,
        fetchUserAPI,
        fetchUserPostAPI,
      }}
    >
      {children}
    </apiContext.Provider>
  );
};

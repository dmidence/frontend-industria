import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Login() {
  let params = useParams<any>();
  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/user", {
        headers: {
          Authorization: `Bearer ${params.token.replaceAll("_$", ".")}`,
        },
      })
      .then((res) => {
        res.data.token = params.token.replaceAll("_$", ".");
        sessionStorage.setItem("appNameLogIn", JSON.stringify(res.data));
        location.reload();
      })
      .catch((err) => {
        location.reload();
      });
  }, []);

  return (
    <div className="max-spiner-container">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

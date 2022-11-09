import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Login() {
  let params = useParams();
  useEffect(() => {
    fetch("");
  }, []);

  return <div>{JSON.stringify(params).replaceAll("_$", ".")}</div>;
}

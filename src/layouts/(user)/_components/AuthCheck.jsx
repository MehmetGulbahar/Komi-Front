import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { useSelector } from "react-redux";

const AuthCheck = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/auth/check-token", {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP hata, durum kodu ${response.status}`);
        }
      })
      .then((data) => {
        dispatch(setUser(data));
      })
      .catch((error) => {
        console.error("İstek hatası:", error);
      });
  }, []);

  return <></>;
};

export default AuthCheck;

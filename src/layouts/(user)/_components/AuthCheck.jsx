import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";
import { useSelector } from "react-redux";

const AuthCheck = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/auth/check-token", {
      method: "POST",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
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

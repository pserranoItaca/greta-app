import { FilmModel } from "@/infraestructure/models/Film";
import { UserModel } from "@/infraestructure/models/User";
import { useState } from "react";

interface UserInfo {
  avatar: number;
  name: string;
  email: string;
  loginDate: Date;

  films: number;
  views: number;
}

const useUserInfo = () => {
  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "http://localhost:3010/user/dashboard/data",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(localStorage.getItem("user")),
        }
      );
      if (response.ok) {
        const data = (await response.json()) as UserModel;
        console.log(data);
        return data;
      }
    } catch (error) {
      console.error("Error during login", error);
    }
    return null;
  };

  //   const getUserFilms = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:3010/user/dashboard/user-films",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(email),
  //         }
  //       );
  //       if (response.ok) {
  //         const data = (await response.json()) as FilmModel[];
  //         return data;
  //       }
  //     } catch (error) {
  //       console.error("Error during login", error);
  //     }
  //     return null;
  //   };

  return { getUserInfo };
};

export default useUserInfo;

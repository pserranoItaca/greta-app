"use client";

import { redirect } from "next/navigation";
import { AuthGuardProps } from "./AuthGuard.types";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  if (localStorage.getItem("user")) {
    return <>{children}</>;
  } else {
    window.location.href = "/";
  }
};
export default AuthGuard;

import { redirect } from "next/navigation";
import { AuthGuardProps } from "./AuthGuard.types";

const AuthGuard = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  if (localStorage.getItem("user")) {
    return <>{children}</>;
  } else {
    redirect("/");
  }
};
export default AuthGuard;

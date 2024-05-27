import { redirect } from "next/navigation";
import { AuthGuardProps } from "./AuthGuard.types";

const AuthGuard = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const a = 1;
  // if (localStorage.getItem("user")) {
  if (a == 1) {
    return <>{children}</>;
  } else {
    redirect("/");
  }
};
export default AuthGuard;

import { redirect } from "next/navigation";
import { AuthGuardProps } from "./AuthGuard.types";

const AuthGuard = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const a = true;
  if (true) {
    return <>{children}</>;
  } else {
    redirect("/");
  }
};
export default AuthGuard;

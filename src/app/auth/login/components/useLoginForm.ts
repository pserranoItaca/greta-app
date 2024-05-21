import { UserModel } from "@/infraestructure/models/User";
import { FormEvent } from "react";

const form = () => {};

const handleSubmit = (e: FormEvent<HTMLFormElement>, values: UserModel) => {
  e.preventDefault();
  console.log(values);
};
export { handleSubmit };

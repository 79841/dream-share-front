import { useState } from "react";
import User from "@/interfaces/User.interface";

const useAuthForm = (initialValues: User) => {
  const [values, setValues] = useState(initialValues);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  return { values, handleChange };
};

export default useAuthForm;

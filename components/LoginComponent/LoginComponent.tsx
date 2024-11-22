"use client";
import { UserContext } from "@/contexts/userContext";
import { isValid } from "@/helpers/validations";
import { FormData, FormTouched } from "@/interfaces/forms";
import { userLogin } from "@/services/userServices";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useContext, useState } from "react";

const LoginComponent = () => {
  const { setUser } = useContext(UserContext);
  const INITIAL_DATA: FormData = { email: "", password: "" };
  const INITIAL_TOUCHED: FormTouched = { email: false, password: false };
  const [data, setData] = useState(INITIAL_DATA);
  const [touched, setTouched] = useState(INITIAL_TOUCHED);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
    const newValue = e.target.value;
    const newData: FormData = { ...data, [field]: newValue };
    setData(newData);
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await userLogin(data);
    if (!res.message) {
      alert("Logged in!");
      setUser(res);
      router.push("/");
    } else {
      alert(res.message);
    }
  };

  const isTouched = (field: string) => {
    return touched[field];
  };

  return (
    <form
      className="w-full flex flex-col gap-4 m-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      {Object.keys(data).map((input, i) => (
        <React.Fragment key={i}>
          <div className="flex justify-start gap-5">
            <label>{input}</label>
            <input
              type={input}
              key={i}
              value={data[input]}
              onChange={(e) => handleChange(e, input)}
              onBlur={() => handleBlur(input)}
            />
          </div>
          {isTouched(input) && !isValid(input, data[input]) && (
            <p className="text-red-500">Error</p>
          )}
        </React.Fragment>
      ))}
      <button
        type="submit"
        disabled={Object.keys(data)
          .map((i) => isValid(i, data[i]))
          .includes(false)}
      >
        Login
      </button>
    </form>
  );
};

export default LoginComponent;

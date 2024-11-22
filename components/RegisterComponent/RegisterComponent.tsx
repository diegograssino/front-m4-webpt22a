"use client";
import { isValid } from "@/helpers/validations";
import { FormData, FormTouched } from "@/interfaces/forms";
import { userRegister } from "@/services/userServices";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const RegisterComponent = () => {
  const INITIAL_DATA: FormData = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  };
  const INITIAL_TOUCHED: FormTouched = {
    email: false,
    password: false,
    name: false,
    address: false,
    phone: false,
  };
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
    const res = await userRegister(data);
    if (!res.message) {
      alert("Registered!");
      router.push("/login");
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
        Register
      </button>
    </form>
  );
};

export default RegisterComponent;

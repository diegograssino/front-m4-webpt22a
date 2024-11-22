import { FormData } from "@/interfaces/forms";

const apiURL = process.env.API_URL || "http://localhost:3001";

export const userRegister = async (data: FormData) => {
  const res = await fetch(`${apiURL}/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  return res.json();
};

export const userLogin = async (data: FormData) => {
  const res = await fetch(`${apiURL}/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  return res.json();
};

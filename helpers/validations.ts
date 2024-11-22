import validator from "validator";

export const isValid = (validation: string, value: string) => {
  if (validation === "email") {
    return validator.isEmail(value);
  }

  if (validation === "password") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 4, max: 6 })
    );
  }

  if (validation === "name") {
    return (
      validator.isAlpha(value) && validator.isLength(value, { min: 4, max: 6 })
    );
  }

  if (validation === "address") {
    return (
      validator.isAlphanumeric(value) &&
      validator.isLength(value, { min: 4, max: 6 })
    );
  }

  if (validation === "phone") {
    return (
      validator.isNumeric(value) &&
      validator.isLength(value, { min: 4, max: 6 })
    );
  }

  // Hacer validaciones para cada campo según correspondas
  return true;
};

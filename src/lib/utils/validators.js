import validator from "validator";

export function validateEmail(email) {
  return validator.isEmail(email);
}

export function validateString(str) {
  return /^[a-zA-Z0-9 ]+$/.test(str) ? true : false;
}
export function validateNumber(str) {
  // console.log(typeof str);
  // console.log(/^\d+$/.test(str), str, "hello");
  return /^\d+$/.test(str);
}
export function validateUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}
export function validateBoolean(bool) {
  return booleanConverter(bool) === true || booleanConverter(bool) === false
    ? true
    : false;
}
export function booleanConverter(bool) {
  if (bool === "true") {
    return true;
  } else if (bool === "false") {
    return false;
  }
}

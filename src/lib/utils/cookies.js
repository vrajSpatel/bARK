export function getCookie(name) {
  var value = null;
  document.cookie.split(";").map((element) => {
    var arr = element.split("=");
    if (arr[0] === ` ${name}`) {
      value = arr[1];
    }
  });
  return value;
}

export function setCookie(name, value, days) {
  let date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=000`;
}

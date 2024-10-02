"use server";
import SigninModel from "../Schema/Authentication";

export default async function signin() {
  console.log("hello");
  var signin1 = new SigninModel({
    email: "hello world",
    password: "dharmik",
  });
  signin1
    .save()
    .then(() => {
      console.log("hello world");
    })
    .catch((err) => {
      console.log(err);
    });
}

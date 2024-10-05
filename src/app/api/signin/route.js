import { dbConnect } from "@/lib/db";
import authModel from "@/lib/Schema/Authentication";
import { validateEmail } from "@/lib/utils/validators";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export async function POST(request) {
  const body = await request.formData();
  var email = body.get("email");
  var password = body.get("password");
  if (!validateEmail(email)) {
    return Response.json({ error: "invalid email" }, { status: 422 });
  }
  await dbConnect();
  const userCheck = await authModel.findOne({ email });
  const passwordMatch = bcrypt.compareSync(password, userCheck.password);
  if (passwordMatch) {
    const payload = { email };
    const secretKey = process.env.JWT_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: "10d" });

    return Response.json({ success: "password matched", auth_token: token });
  } else {
    return Response.json({ error: "password is incorrect" }, { status: 401 });
  }
  // console.log(passwordMatch);
  // password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const user = new authModel({
  //   email,
  //   password,
  // });
  // console.log(await user.save());
  // console.log(mongoose.models);

  // console.log(dbConnect().readyState);
  // return Response.json({ greet: "hello world" });
}

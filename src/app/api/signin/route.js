import { dbConnect } from "@/lib/db";
import authModel from "@/lib/Schema/Authentication";
import { validateEmail } from "@/lib/utils/validators";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  const body = await request.formData();
  var email = body.get("email");
  if (!email) {
    return Response.json({ error: "email id is required" }, { status: 404 });
  }
  var password = body.get("password");
  if (!password) {
    return Response.json({ error: "password is required" }, { status: 404 });
  }
  // console.log(email, password);
  if (!validateEmail(email)) {
    return Response.json({ error: "invalid email" }, { status: 422 });
  }
  await dbConnect();
  const userCheck = await authModel.findOne({ email });
  if (!userCheck) {
    return Response.json(
      { error: "user not found in the records! please signup:)" },
      { status: 404 }
    );
  }
  try {
    const passwordMatch = bcrypt.compareSync(password, userCheck.password);
    if (passwordMatch) {
      const payload = { email };
      const secretKey = process.env.JWT_KEY;
      const token = jwt.sign(payload, secretKey, { expiresIn: "10d" });

      return Response.json({ success: "password matched", auth_token: token });
    } else {
      return Response.json({ error: "password is incorrect" }, { status: 401 });
    }
  } catch (err) {
    console.log(err);
    return Response.json({ error: "password doesn't match!" }, { status: 401 });
  }
}

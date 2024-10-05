import { dbConnect } from "@/lib/db";
import authModel from "@/lib/Schema/Authentication";
import { validateEmail } from "@/lib/utils/validators";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    try {
      var body = await request.formData();
    } catch (error) {
      console.log(error.message);
      body = null;
    }
    if (!body) {
      return Response.json(
        { error: "all fields are required!" },
        { status: 404 }
      );
    }
    var email = body?.get("email");
    var password = body?.get("password");
    var professional = body?.get("professional");
    console.log(body?.get("email"));
    if (!email || !password || !professional) {
      return Response.json(
        { error: "all fields are required!" },
        { status: 404 }
      );
    }
    if (!validateEmail(email)) {
      return Response.json({ error: "invalid email" }, { status: 422 });
    } else if (professional !== "0" && professional !== "1") {
      return Response.json({ error: "invalid profession!" }, { status: 422 });
    }
    await dbConnect();
    const userCheck = await authModel.findOne({ email });
    if (userCheck?.email) {
      return Response.json({ error: "User Already Exists!" }, { status: 409 });
    } else {
      try {
        password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const newUser = new authModel({
          email,
          password,
          professional,
        });

        await newUser.save();
        const payload = { email };
        const secretKey = process.env.JWT_KEY;
        const token = jwt.sign(payload, secretKey, { expiresIn: "10d" });

        return Response.json({
          success: "account created successfully!",
          auth_token: token,
        });
      } catch (error) {
        console.log(error);
        return Response.json(
          { error: "An unknown error occured, Please try again later!" },
          { status: 404 }
        );
      }
    }
    
  } catch (err) {
    console.log(err);
    return Response.json(
      {
        error: "An unknown error occured, Please try again later!",
      },
      { error: 404 }
    );
  }
}

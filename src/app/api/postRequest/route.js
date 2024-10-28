import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import {
  validateBoolean,
  validateString,
  validateAddress,
  validateStringArray,
} from "@/lib/utils/validators";
import Post from "@/lib/Schema/Post";
import Authentication from "@/lib/Schema/Authentication";
import { dbConnect } from "@/lib/db";

export async function POST(request) {
  try {
    try {
      const headerList = headers();
      var auth_token = headerList.get("auth_token");
      if (!auth_token) {
        return Response.json(
          { error: "please signin again!" },
          { status: 422 }
        );
      }
      var email;
      jwt.verify(auth_token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
          throw err;
        }
        email = decoded.email;
      });
    } catch (error) {
      console.log(error);
      return Response.json({ error: "please signin again!" }, { status: 422 });
    }
    try {
      var body = await request.formData();
    } catch (error) {
      console.log(error.message);
      body = null;
    }
    if (!body) {
      return Response.json(
        { error: "certain fields are required!" },
        { status: 404 }
      );
    }
    var name = body?.get("name");
    var address = body?.get("address");
    var urgent = body?.get("urgent");
    var field = body?.get("field");
    var details = await JSON.parse(body?.get("details"));
    var date = Date.now();
    var nationWide = body?.get("nationWide");

    //testing logs ------------------------------------------
    // console.log(name && !validateString(name));
    // console.log(address && !validateAddress(address));
    // console.log(urgent && !validateBoolean(urgent));
    // console.log(field && !validateString(field));
    // console.log(details && !validateStringArray(details));
    // console.log(nationWide && !validateBoolean(nationWide);

    //validation of form data--------------------------------
    if (
      (name && !validateString(name)) ||
      (address && !validateAddress(address)) ||
      (urgent && !validateBoolean(urgent)) ||
      (field && !validateString(field)) ||
      (details && !validateStringArray(details)) ||
      (nationWide && !validateBoolean(nationWide))
    ) {
      return Response.json(
        { error: "invalid form data provided" },
        { status: 422 }
      );
    }

    await dbConnect();
    const userCheck = await Authentication.findOne(
      { email },
      { email: 0, password: 0, _id: 0 }
    );
    console.log(userCheck);
    if (userCheck.professional === "0") {
      if (!name) {
        return Response.json({ error: "name is required!" }, { status: 400 });
      }
      if (!address) {
        return Response.json(
          { error: "address field is required!" },
          { status: 400 }
        );
      }
      if (!field) {
        return Response.json(
          { error: "field field is required!" },
          { status: 400 }
        );
      }
      if (!details) {
        return Response.json(
          { error: "details is required!" },
          { status: 400 }
        );
      }
      if (!nationWide) {
        return Response.json(
          { error: "nationWide is required!" },
          { status: 400 }
        );
      }

      try {
        const newPost = new Post({
          email,
          name,
          address,
          urgent,
          field,
          details,
          date,
          nationWide,
        });
        await newPost.save();
        return Response.json({ success: "Userdata updated successfully!" });
      } catch (err) {
        return Response.json(
          { error: "An unexpected error occured, Please try again later!" },
          { status: 500 }
        );
      }
    } else {
      return Response.json(
        { error: "User not found as a customer!" },
        { status: 404 }
      );
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

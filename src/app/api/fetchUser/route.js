import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import ProfessionalUser from "@/lib/Schema/Puser";
import { dbConnect } from "@/lib/db";

export async function POST() {
  try {
    const headerList = headers();
    var auth_token = headerList.get("auth_token");
    if (!auth_token) {
      return Response.json({ error: "please signin again!" }, { status: 422 });
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
    await dbConnect();
    const userCheck = await ProfessionalUser.findOne(
      { email },
      { _id: 0, email: 0 }
    );
    return Response.json({ userData: userCheck });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "please signin again1!" }, { status: 422 });
  }
}

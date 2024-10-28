import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import postModel from "@/lib/Schema/Post";
import { dbConnect } from "@/lib/db";

export async function POST(request) {
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
    const userPosts = await postModel.aggregate([
      {
        $match: { email },
      },
    ]);
    return Response.json({ userPosts: userPosts });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "please signin again1!" }, { status: 422 });
  }
}

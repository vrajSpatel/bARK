import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import Post from "@/lib/Schema/Post";
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
    var body = await request.formData();
  } catch (error) {
    console.log(error.message);
    body = null;
  }
  if (!body) {
    return Response.json(
      {
        error:
          "Atleast one filter is required from : (name, field, nationWide)",
      },
      { status: 404 }
    );
  }

  var name = body?.get("name");
  var field = body?.get("field");
  var nationWide = body?.get("nationWide");
  if (nationWide === "true") {
    nationWide = true;
  } else if (nationWide === "false") {
    nationWide = false;
  } else {
    nationWide = undefined;
  }
  try {
    await dbConnect();
    const fetchPosts = await Post.aggregate([
      {
        $match: { $or: [{ name }, { field }, { nationWide }] },
      },
      {
        $project: {
          __v: 0,
        },
      },
    ]);
    return Response.json({ userData: fetchPosts });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "please signin again1!" }, { status: 422 });
  }
}

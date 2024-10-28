import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import ProfessionalUser from "@/lib/Schema/Puser";
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
          "Atleast one filter is required from : (service, companyName, name)",
      },
      { status: 404 }
    );
  }

  var service = body?.get("service");
  var companyName = body?.get("companyName");
  var name = body?.get("name");
  try {
    await dbConnect();
    const userCheck = await ProfessionalUser.aggregate([
      {
        $lookup: {
          from: "authentications",
          localField: "email",
          foreignField: "email",
          as: "professional",
        },
      },
      {
        $match: {
          $and: [
            { $or: [{ service }, { companyName }, { name }] },
            { "professional.professional": "1" },
          ],
        },
      },
      {
        $project: {
          _id: 0,
          email: 0,
          tellNumber: 0,
          professional: 0,
          __v: 0,
        },
      },
    ]);
    return Response.json({ userData: userCheck });
  } catch (error) {
    console.log(error);
    return Response.json({ error: "please signin again1!" }, { status: 422 });
  }
}

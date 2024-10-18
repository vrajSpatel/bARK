import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import {
  validateBoolean,
  validateNumber,
  validateString,
  validateUrl,
} from "@/lib/utils/validators";
import ProfessionalUser from "@/lib/Schema/Puser";
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
        { error: "all fields are required!" },
        { status: 404 }
      );
    }
    var name = body?.get("name");
    var service = body?.get("service");
    var area = await JSON.parse(body?.get("area"));
    var companyName = body?.get("companyName");
    var tellNumber = body?.get("tellNumber");
    var website = await JSON.parse(body?.get("website"));
    var company = await JSON.parse(body?.get("company"));

    // console.log(name && !validateString(name));
    // console.log(service && !validateString(service));
    // console.log(area && area.nationwide && !validateBoolean(area.nationwide));
    // console.log(area && area.pincode && !validateNumber(area.pincode));
    // console.log(area && area.radius && !validateNumber(area.radius));
    // console.log(companyName && !validateString(companyName));
    // console.log(tellNumber && !validateNumber(tellNumber));
    // console.log(website && website.exist && !validateBoolean(website.exist));
    // console.log(website && website.link && !validateUrl(website.link));
    // console.log(company && !validateString(company.size));
    // console.log(
    //   company && company.salesTeam && !validateBoolean(company.salesTeam)
    // );
    // console.log(
    //   company && company.socialMedia && !validateBoolean(company.socialMedia)
    // );

    //validation of form data--------------------------------
    if (
      (name && !validateString(name)) ||
      (service && !validateString(service)) ||
      (area && area.nationwide && !validateBoolean(area.nationwide)) ||
      (area && area.pincode && !validateNumber(area.pincode)) ||
      (area && area.radius && !validateNumber(area.radius)) ||
      (companyName && !validateString(companyName)) ||
      (tellNumber && !validateNumber(tellNumber)) ||
      (website && website.exist && !validateBoolean(website.exist)) ||
      (website && website.link && !validateUrl(website.link)) ||
      (company && !validateString(company.size)) ||
      (company && company.salesTeam && !validateBoolean(company.salesTeam)) ||
      (company && company.socialMedia && !validateBoolean(company.socialMedia))
    ) {
      return Response.json(
        { error: "invalid form data provided" },
        { status: 422 }
      );
    }

    //area field logical validation -------------------------

    if (area.nationwide === "false") {
      if (!area.pincode) {
        return Response.json(
          { error: "pincode missing in area field!" },
          { status: 400 }
        );
      } else if (!area.radius) {
        return Response.json(
          { error: "radius missing in area field!" },
          { status: 400 }
        );
      }
    } else if (area.nationwide === "true") {
      area = { nationwide: true };
    } else {
      return Response.json(
        { error: "invalid field in area!" },
        { status: 400 }
      );
    }

    //website field logical validation ---------------------
    if (website?.exist === "true") {
      if (!website.link) {
        return Response.json(
          { error: "missing link in website field!" },
          { status: 400 }
        );
      }
    } else if (website?.exist === "false") {
      website = { exist: false };
    } else {
      return Response.json(
        { error: "invalid field in website!" },
        { status: 400 }
      );
    }
    await dbConnect();
    const userCheck = await ProfessionalUser.findOne({ email });
    if (!userCheck) {
      if (!name) {
        return Response.json({ error: "name is required!" }, { status: 400 });
      }
      if (!service) {
        return Response.json(
          { error: "service field is required!" },
          { status: 400 }
        );
      }
      if (!area || !area?.nationwide) {
        return Response.json(
          { error: "area field is required!" },
          { status: 400 }
        );
      }
      if (!tellNumber) {
        return Response.json(
          { error: "Telephone number is required!" },
          { status: 400 }
        );
      }
      if (!website || !website?.exist) {
        return Response.json(
          { error: "website field is required!" },
          { status: 400 }
        );
      }
      if (!company || !company?.size) {
        return Response.json(
          {
            error: "company field is required!",
          },
          { status: 400 }
        );
      }
      try {
        const newUser = new ProfessionalUser({
          email,
          name,
          service,
          area,
          companyName,
          tellNumber,
          website,
          company,
        });
        await newUser.save();
        return Response.json({ success: "Userdata updated successfully!" });
      } catch (err) {
        return Response.json(
          { error: "An unexpected error occured, Please try again later!" },
          { status: 500 }
        );
      }
    } else {
      try {
        await ProfessionalUser.findOneAndUpdate(
          { email },
          {
            name,
            service,
            area,
            companyName,
            tellNumber,
            website,
            company,
          }
        );
        return Response.json({ success: "Userdata updated successfully!" });
      } catch (err) {
        return Response.json(
          { error: "An unexpected error occured, Please try again later!" },
          { status: 500 }
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

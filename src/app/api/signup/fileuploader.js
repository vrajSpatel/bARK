// import formidable from "formidable";
import path from "path";
import fs from "fs";
export async function POST(request) {
  const body = await request.formData();
  var image = body.get("image");

  var bytes = await image.arrayBuffer();
  var buffer = Buffer.from(bytes);
  console.log(buffer[0]);

  const path1 = path.join("/", "temp", image.name);
  console.log(path1);
  await fs.writeFile(path1, buffer, (err) => {
    console.log(err);
  });
  // console.log(await request.formData());
  // const form = new formidable.IncomingForm();
  // console.log(form);
  // form.parse(request, (err, fields, files) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   console.log("fields", fields);
  // });

  //   const body = await request.json();
  //   const { name } = body;
  //   console.log(name);
  //   console.log(JSON.parse(request.body));
  //   console.log(request.body);
  return Response.json({ greet: "hello world" });
}
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

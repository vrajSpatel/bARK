import path from "path";
import fs from "fs";

export default async function fileUploader(profileImage) {
  try {
    if (!profileImage) {
      return;
    }
    const nameArray = profileImage?.name.split(".");

    if (
      profileImage?.type !== "image/png" &&
      profileImage?.type !== "image/JPEG" &&
      profileImage?.type !== "image/JPG" &&
      profileImage?.type !== "image/WebP" &&
      profileImage?.type !== "image/HEIF" &&
      profileImage?.type !== "image/HEIC"
    ) {
      return { error: "1" };
    } else {
      var bytes = await profileImage?.arrayBuffer();
      var buffer = Buffer.from(bytes);

      const newFileName = `${Date.now()}_${Math.floor(
        Math.random() * 100000000
      )}.${nameArray[nameArray.length - 1]}`;

      const path1 = path.join(
        path.resolve(),
        "/public/profileImages",
        newFileName
      );
      fs.writeFile(path1, buffer, (err) => {
        if (err) {
          throw err;
        }
      });
      return { newName: newFileName, name: profileImage?.name };
    }
  } catch (error) {
    console.log(error);
    return { error: "2" };
  }
}

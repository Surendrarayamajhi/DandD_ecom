const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const secret = "XigIAU64jPXc9dH3IBGj8QTqP2E";
cloudinary.config({
  cloud_name: "dyryhsz9v",
  api_key: "731681625999355",
  api_secret: secret,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };

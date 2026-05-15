const MAX_SIZE = 5 * 1024 * 1024;

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
const imageError = (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    console.log("Image error");
    return res.status(400).json({ message: "Images required" });
  }

  if (req.files.length > 10) {
    console.log("Image error");
    return res.status(400).json({ message: "Max 10 images allowed" });
  }

  for (let file of req.files) {
    if (!allowedTypes.includes(file.mimetype)) {
      return res.status(400).json({ message: "Invalid file type" });
    }

    if (file.size > MAX_SIZE) {
      return res.status(401).json({ message: "File too large" });
    }
  }

  next();
};

module.exports = imageError;

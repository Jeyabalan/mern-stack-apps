import multer from "multer";
import Image from "../models/image.js";

const storeImage = async (req, res) => {
  try {
    const newImage = new Image({
      name: req.file.originalname,
      img: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
    });
    const response = await newImage.save();
    res.status(200).json({ success: true, data: response });
  } catch (error) {
    res.status(500).json({ error: `Error in Upload Image, ${error}` });
  }
};

const getImage = async (req, res) => {
  try {
    const image = await Image.findById({ _id: req.params.id });
    res.status(200).json({ data: image });
  } catch (error) {
    res.status(500).json({ error: `Error in getting Image, ${error}` });
  }
};

export { storeImage, getImage };

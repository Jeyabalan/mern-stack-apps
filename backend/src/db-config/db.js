import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(`There is a problem in MongoDB connection, ${error}`);
  }
};

export default connectDB;

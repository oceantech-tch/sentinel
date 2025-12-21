import mongoose from "mongoose";

const connectDb = async ()=>{
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined");
    }

    await mongoose.connect(mongoUri);

    console.log(`MongoDB Connected 😎 ✔`);
  } catch (e) {
    console.error("MongoDB connection error ❌", e);
    process.exit(1);
  }
};

export default connectDb;
import mongoose from "mongoose";

export const db = async () => {
  try {
    await mongoose.connect(process.env.PORT || "");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

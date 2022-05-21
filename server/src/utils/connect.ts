import mongoose from "mongoose";
const connect = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/VetaranMeet");
    console.log("DB connected");
  } catch (error) {
    console.log(error);
    console.log("DB not connected");
    process.exit(1);
  }
};

export default connect;

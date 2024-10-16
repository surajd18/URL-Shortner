
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(
        `MONGO_DB URL : ${process.env.MONGO_URL}`
      );
    const connectionInstace = await mongoose.connect(
      `${process.env.MONGO_URL}/short-url`
    );

    console.log(
      `MONGO_DB Connected !! DB_HOST : ${connectionInstace.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB COnnection error ", error);
    process.exit(1);
  }
};

export default connectDB;

import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jaimeenmakavana123:rbzwr5XHHxasB69G@cluster0.jfjnev6.mongodb.net/",
      {
        useUnifiedTopology: true,
        // poolSize: 10,
      }
    );
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("errrooroor-------------->", error);
  }
};

export default connectMongoDB;

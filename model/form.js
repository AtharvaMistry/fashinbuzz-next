import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    fullname: String,
    email: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.models.Form || mongoose.model("Customer", topicSchema);

export default Form;

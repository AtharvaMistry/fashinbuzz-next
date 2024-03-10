import connectMongoDB from "@/libs/mongodb";
import Form from "@/model/form";
import { NextResponse } from "next/server";

// CORS middleware
const allowCors = (handler) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Accept, Content-Type"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return await handler(req, res);
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

// POST handler
export const POST = allowCors(async (request) => {
  try {
    const { fullname, email, message } = await request.json();
    await connectMongoDB();
    await Form.create({ fullname, email, message });
    return NextResponse.json({ message: "Customer Created" }, { status: 201 });
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrrr:", error);
  }
});

// GET handler
export const GET = allowCors(async () => {
  await connectMongoDB();
  const Forms = await Form?.find();
  return NextResponse.json({ Forms });
});

// DELETE handler
export const DELETE = allowCors(async (request) => {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id, "sdsdjhjbfsa");
  await connectMongoDB();
  const res = await Form.findByIdAndDelete(id);
  console.log(res, "response");
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
});

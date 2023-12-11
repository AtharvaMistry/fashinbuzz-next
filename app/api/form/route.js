import connectMongoDB from "@/libs/mongodb";
import Form from "@/model/form";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { fullname, email, message } = await request.json();
    await connectMongoDB();
    await Form.create({ fullname, email, message });
    return NextResponse.json({ message: "Customer Created" }, { status: 201 });
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrrr:", error);
  }
}

export async function GET() {
  await connectMongoDB();
  const Forms = await Form?.find();
  return NextResponse.json({ Forms });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id, "sdsdjhjbfsa");
  await connectMongoDB();
  const res = await Form.findByIdAndDelete(id);
  console.log(res, "response");
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

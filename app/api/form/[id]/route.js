import connectMongoDB from "@/libs/mongodb";
import Form from "@/model/form";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  console.log(id);
  const {
    newFullname: fullname,
    newEmail: email,
    newMessage: message,
  } = await request.json();
  await connectMongoDB();
  await Form.findByIdAndUpdate(id, { fullname, email, message });
  return NextResponse.json({ message: "Customer updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const Form = await Form.findOne({ _id: id });
  return NextResponse.json({ Form }, { status: 200 });
}

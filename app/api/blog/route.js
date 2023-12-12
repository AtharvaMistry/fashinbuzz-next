import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.log("errrrrrrrrrrrrrrrrrrr:", error);
  }
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic?.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  const res = await Topic.findByIdAndDelete(id);
  console.log(res, "response");
  return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}

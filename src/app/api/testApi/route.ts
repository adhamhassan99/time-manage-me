import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  return new NextResponse("success", { status: 200 });
};

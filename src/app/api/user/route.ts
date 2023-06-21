import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import CrudModel from "@/server/model/crudModel";
import { db } from "@/server/config/db";
interface User {
  id: string;
  name: string;
  email: string;
}

interface userData {
  name: string;
  email: string;
}
const data: User[] = [
  {
    id: crypto.randomUUID(),
    name: "nayeem",
    email: "kazi nayeem@gmail.com",
  },
];
export async function GET() {
  db();
  const crud = await CrudModel.find();
  return NextResponse.json(crud, { status: 200 });
}

export async function POST(request: NextRequest) {
  try {
    db();
    const { name, email }: userData = await request.json();

    const create = await CrudModel.create({ name: name, email: email });
    return NextResponse.json(create);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id } = await request.json();
    const del = data.filter((d) => d.id !== id);
    return NextResponse.json(del);
  } catch (error) {
    return NextResponse.error();
  }
}

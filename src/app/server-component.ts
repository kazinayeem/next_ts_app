"use server";

import crudModel from "@/server/model/crudModel";

export async function getItem() {
  const data = await crudModel.find();

  return data;
}

interface user {
  name: string;
  email: string;
}
export async function saveUser(user: user) {
  try {
    const newdata = new crudModel({ name: user.name, email: user.email });
    const res = await newdata.save();
    return res;
  } catch (error) {
    console.log(error);
  }
}

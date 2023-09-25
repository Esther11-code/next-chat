"use server";

import { NextResponse } from "next/server";
import {z} from "zod";
import  UserModel  from "@/schema/userSchema"
import { connectDB } from '@/server/connectDB'

const signupSchema = z.object({
  username: z
 
  .string()
  .nonempty()
  .min(3, "username too short")
  .max(15, "username too long"),
  phone: z
  .number()
  .min(10, "invalid phone number"),
  password: z
  
  .string()
  .nonempty()
  .min(6, "password too short")
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]+$/,
    "include uppercase, number, and character"
    )
  
})

export async function POST(req){
 try{
  await connectDB();
  const formdata = await req.formData();
  const password = formdata.get("password").trim();
  const phone = +formdata.get("phone").trim();
  const username = formdata.get("username").trim();
  console.log(password, username, phone);

  signupSchema.parse({phone, password, username});

 const newUser = new UserModel({phone, password, username})
 const saved = await newUser.save();
 if (saved){
  return NextResponse.json(
    {error:"user account created"}
   );
 }else return NextResponse.json(
    {error:"failed to create account"}
   );
 } catch (error) {
  if (error instanceof z.ZodError){
    const errors = (error.flatten().fieldErrors);
    if(Object.keys(errors).length > 0){
      const firstError = Object.values(errors)[0][0]
      return NextResponse.json({ error: firstError });
    }
  }
  console.log(error)
  return NextResponse.json(
    {error:"an unknown error occured"}
   );
  
 }
}
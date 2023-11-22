import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import prisma from "@/prisma/client";

const userSchema=z.object({
    full_name:z.string().min(1).max(255),
    user_name:z.string().min(4).max(255),
    phone:z.string().min(1)
})
export async function  POST(request:NextRequest){
    const body= await request.json() 
    const uservalidation=userSchema.safeParse(body);
    if(!uservalidation.success)
    return NextResponse.json(uservalidation.error.errors,{status:401})
const newUser=prisma.user.create({
    data: { full_name: body.full_name, user_name: body.user_name , phone: body.phone }
})

return NextResponse.json(newUser,{status:201})

}
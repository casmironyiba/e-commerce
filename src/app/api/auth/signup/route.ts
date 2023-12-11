import dbConnect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";



dbConnect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email,phoneNumber, password,isAdmin} = reqBody

        // console.log(`from backend ==>`, reqBody);
        // console.log(reqBody);

        //check if user already exists
        const user = await User.findOne({email})
        // console.log(user);

        if(user){
          return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        // console.log(hashedPassword);

        const newUser = new User({
          username,
          email,
          phoneNumber,
          password: hashedPassword,
          isAdmin
        })
        // console.log(`newUser ${newUser}`);

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
          message: "User created successfully",
          success: true,
          savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}

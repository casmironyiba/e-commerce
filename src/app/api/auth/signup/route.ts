import dbConnect from "@/dbConfig/dbConfig";
import User, {IUser} from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
// import { sendEmail } from "@/helpers/mailer";


dbConnect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {username, email,phoneNumber, password,isAdmin} = reqBody.userInput
console.log(username);

        //check if user already exists
        const user = await User.findOne({email});
        console.log(user);

        if(user){
          return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const newUser:IUser = new User({
          username,
          email,
          phoneNumber,
          password,
          isAdmin
        })

        const savedUser = await newUser.save()
        console.log(savedUser);

        //send verification email

        // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
          message: "User created successfully",
          success: true,
          savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}

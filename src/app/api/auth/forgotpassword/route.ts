import { sendForgotPasswordEmail } from '@/helpers/mailer';
import { NextRequest, NextResponse } from "next/server";
import generateResetToken from '@/helpers/generateResetToken';
import User from '@/models/userModel';

export async function POST(request: NextRequest){

  try {
    const reqBody = await request.json();
    const { email } = reqBody;
    
    await User.findOne({email})
    .then( async (user) => {
      if (user) {
    console.log(email);
        // Generate a reset token (you may have your own implementation)
        const resetToken = generateResetToken();

        // Call the sendForgotPasswordEmail function
        await sendForgotPasswordEmail(email, resetToken);

        return NextResponse.json({
          message: 'Password reset email sent successfully.', 
          success:true
        });

      } else {
        return NextResponse.json({
          message:"No user found",
          success:false
        })
      }

    })

  } catch (error:any) {
    console.error('Error sending password reset email:', error.message);
    return NextResponse.json({error: error.message},{status:500});
  }
}



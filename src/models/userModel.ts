import mongoose, {Schema, Document} from "mongoose";
import bcrypt from 'bcryptjs';


export interface IUser extends Document {
  username:string; 
  email:string;
  phoneNumber:string;
  password:string;
  isVerfied:boolean;
  isAdmin:boolean;
  forgotPasswordToken:string;
  forgotPasswordTokenExpiry:string;
  verifyToken:string;
  verifyTokenExpiry:string

}

const userSchema:Schema<IUser> = new mongoose.Schema({
    username: {
      type: String,
      required: [true, "Please provide a username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide a email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please provide your phone number"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide a password"],
    },
    isVerfied: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
},
  {
    timestamps:true,
  }
)
  userSchema.pre<IUser>('save', async function(next) {
    try {
      if (this.isModified('password') || this.isNew) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
      };

      next()
    } catch (error:any) {
      next(error)
      
    }

  })

const User = mongoose.models?.users || mongoose.model("users", userSchema);

export default User;

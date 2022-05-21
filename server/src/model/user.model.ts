import mongoose, {ObjectId} from "mongoose";
import bcrypt from "bcrypt";

// import {Veteran} from "@bitflipz/shared/src/Entity"

// type IUser = Omit<Veteran, "entityType"> & {
//   password: String,
//   sector: String,
//   followers: [String]
// }

export interface UserInput{
  email: string;
  name: string;
  password: string;
}
interface UserInterface extends UserInput{
  location: String;
  sector: String;
  stars: Number;
  followers: ObjectId[];
  following: ObjectId[];
  login(email: any, password: any): any;
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  location: {
    type:String,
    required: true
  },
  sector:{
    type: String,
    enum: ["Engineering", "Buisness"],
    required: true
  },
  stars:{
    type: Number,
    default: 0
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    default: []
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    default: []
  }]
});

userSchema.pre("save", async function(next){
  let user = this;
  console.log(user);
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;
  return next();
});

userSchema.statics.login = async function (email: any, password: any) {
  const user = await this.findOne({ email });
  if (user) {
      const auth = await bcrypt.compare(password, user.password);
      console.log(auth)
      if (auth) {
        return user;
      } else{
        throw Error('incorrect password');  
      }
  } else{
    throw Error('incorrect email');
  }
};

const userModel = mongoose.model("user", userSchema);

export default userModel;

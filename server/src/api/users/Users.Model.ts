import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const UsersSchema: Schema = new Schema({
  username: { 
    type: String,
    required: true
  }
});

export class UsersModel extends BaseModel {

  constructor() {
    super(mongoose.model("User", UsersSchema));
  }
}
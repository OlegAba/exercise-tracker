import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const UsersSchema: Schema = new Schema({
  username: { type: String },
  exercises: [{
    description: { type: String },
    duration: { type: Number },
    date: { type: Date }
  }]
});

export class UsersModel extends BaseModel {

  constructor() {
    super(mongoose.model("User", UsersSchema));
  }
}
import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const ExercisesSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  description: { type: String },
  duration: { type: Number },
  date: { type: String }
});

export class ExercisesModel extends BaseModel {

  constructor() {
    super(mongoose.model("Exercise", ExercisesSchema));
  }
}
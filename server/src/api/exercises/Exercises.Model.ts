import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const ExercisesSchema: Schema = new Schema({
  description: { type: String },
  duration: { type: Number },
  date: { type: Date }
});

export class ExercisesModel extends BaseModel {

  constructor() {
    super(mongoose.model("Exercise", ExercisesSchema));
  }
}
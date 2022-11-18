import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const ExercisesSchema: Schema = new Schema({
  user_id: { 
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  description: { 
    type: String,
    required: true
  },
  duration: { 
    type: Number,
    required: true
  },
  date: { 
    type: Schema.Types.Date,
    required: true,
  }
});

export class ExercisesModel extends BaseModel {

  constructor() {
    super(mongoose.model("Exercise", ExercisesSchema));
  }
}
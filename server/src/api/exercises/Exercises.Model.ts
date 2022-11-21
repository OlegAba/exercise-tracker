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

  findExercises(userID: string, fromDate?: Date, toDate?: Date, limit?: number): Promise<any[]> {
    limit = (typeof limit != "undefined") 
              ? limit
              : Number.MAX_SAFE_INTEGER

    fromDate = (typeof fromDate != "undefined") 
                ? new Date(fromDate)
                : new Date(-8640000000000000) // Min Date

    toDate = (typeof toDate != "undefined")
              ? new Date(toDate)
              : new Date(8640000000000000) // Max Date

    const query = { 
      user_id: userID,
      date: {
        $gte: fromDate,
        $lte: toDate
      }
    }

    const projection = { 
      _id: 0,
      description: 1,
      duration: 1,
      date: 1
    }

    return this.mongooseModel.find(query, projection).limit(limit).exec()
  }  
}
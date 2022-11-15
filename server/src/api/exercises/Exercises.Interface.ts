import mongoose from "mongoose";

export interface Exercise {
  description: string;
  duration: number;
  date: Date;
}

export interface ExerciseJSON extends Exercise {
  _id: string;
}

export interface ExerciseDB extends Exercise {
  _id: mongoose.ObjectId;
}
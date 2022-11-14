import mongoose from "mongoose";

interface Exercise {
  description: string;
  duration: number;
  date: Date;
}

export interface Users {
  username: string;
  exercises: Exercise[];
}

export interface UsersJSON extends Users {
  _id: string;
}

export interface UsersDB extends Users {
  _id: mongoose.ObjectId;
}
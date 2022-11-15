import mongoose from "mongoose";

export interface Users {
  username: string;
}

export interface UsersJSON extends Users {
  _id: string;
}

export interface UsersDB extends Users {
  _id: mongoose.ObjectId;
}
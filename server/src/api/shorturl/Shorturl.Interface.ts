import mongoose from "mongoose";

export interface Shorturl {
  original_url: string;
  short_url: string;
}

export interface ShorturlJSON extends Shorturl {
  _id: string;
}

export interface ShorturlDB extends Shorturl {
  _id: mongoose.ObjectId;
}
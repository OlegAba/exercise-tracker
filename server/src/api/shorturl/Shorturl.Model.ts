import mongoose, { Schema } from "mongoose";
import { BaseModel } from "../Base.Model";

const ShorturlSchema: Schema = new Schema({
  original_url: { type: String },
  short_url: { type: String }
});

export class ShorturlModel extends BaseModel {

  constructor() {
    super(mongoose.model("Shorturl", ShorturlSchema));
  }
}
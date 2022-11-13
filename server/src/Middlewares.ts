import express from "express";
import multer from "multer";
import cors from "cors";

export const middlewares = [
  multer().none(),
  express.json(),
  express.urlencoded({ extended: false }),
  cors({ 
    origin: [
      "http://localhost:3000",
      "https://www.freecodecamp.org"
    ],
    credentials: true,
    optionsSuccessStatus: 200
  })
]
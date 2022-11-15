import { Request, Response } from "express";

export function validateExercise(req: Request, res: Response, next: CallableFunction): void {
  const description: string | undefined = req.body.description;
  
  if (description === undefined || description === "") {
    res.status(400).json({ error: "Description cannot be undefined or empty" });
    return;
  }

  const duration: string | undefined = req.body.duration;

  if (duration === undefined || duration === "") {
    res.status(400).json({ error: "Duration cannot be undefined or empty" });
    return;
  }

  if (isNaN(Number(duration))) {
    res.status(400).json({ error: "Duration must be a number" });
    return;
  }

  const date: string | undefined = req.body.date;

  if (date != undefined) {
    // YYYY-MM-DD
    const dateRegEx = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(dateRegEx)) {
      res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });
      return
    }
  }

  res.locals.description = description;
  res.locals.duration = duration;
  res.locals.date = date;
  
  next();
}
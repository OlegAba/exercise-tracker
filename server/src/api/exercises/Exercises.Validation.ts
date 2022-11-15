import { Request, Response } from "express";

export function validateExercise(req: Request, res: Response, next: CallableFunction): void {
  const description: string | undefined = req.body.description;
  
  if (description === undefined || description === "") {
    res.status(400).json({ error: "description cannot be nil or empty" });
    return;
  }

  const duration: string | undefined = req.body.duration;

  if (duration === undefined || duration === "") {
    res.status(400).json({ error: "duration cannot be nil or empty" });
    return;
  }

  if (isNaN(Number(duration))) {
    res.status(400).json({ error: "duration must be a number" });
    return;
  }

  res.locals.description = description;
  res.locals.duration = duration;
  res.locals.date = req.body.date;
  
  next();
}
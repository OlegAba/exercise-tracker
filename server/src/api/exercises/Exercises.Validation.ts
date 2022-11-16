import { Request, Response } from "express";

function isValid(date: string): boolean {
  // YYYY-MM-DD
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}

export function validateExercise(req: Request, res: Response, next: CallableFunction): void {
  const description = req.body.description;
  
  if (description === undefined || description === "") {
    res.status(400).json({ error: "Description cannot be undefined or empty" });
    return;
  }

  const duration = req.body.duration;

  if (duration === undefined || duration === "") {
    res.status(400).json({ error: "Duration cannot be undefined or empty" });
    return;
  }

  if (isNaN(Number(duration))) {
    res.status(400).json({ error: "Duration must be a number" });
    return;
  }

  const date = req.body.date;

  if (date != undefined) {
    if (!isValid(date)) {
      res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });
      return
    }
  }

  res.locals.description = description;
  res.locals.duration = duration;
  res.locals.date = date;
  
  next();
}

export function validateQuery(req: Request, res: Response, next: CallableFunction): void {
  const fromDate = req.query.from;
  
  if (fromDate != undefined) {
    if (!isValid(String(fromDate))) {
      res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });  
    }
  }

  const toDate = req.query.to;

  if (toDate != undefined) {
    if (!isValid(String(toDate))) {
      res.status(400).json({ error: "Date must be in YYYY-MM-DD format" });  
    }
  }

  const limit = req.query.limit;

  if (limit != undefined) {
    if (isNaN(Number(limit))) {
      res.status(400).json({ error: "Limit must be a number" });
      return;
    }
  }

  res.locals.fromDate = fromDate;
  res.locals.toDate = toDate;
  res.locals.limit = limit;

  next();
}
import { Request, Response } from "express";

export function validateUsername(req: Request, res: Response, next: CallableFunction): void {
  const username: string | undefined = req.body.username;

  if (username === undefined || username === "") {
    res.status(400).json({ error: "username cannot be nil or empty" });
    return;
  }

  res.locals.username = username;
  next();
}
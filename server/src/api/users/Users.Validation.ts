import { Request, Response } from "express";

export function validateUsername(req: Request, res: Response, next: CallableFunction): void {
  const username: string | undefined = req.body.username;

  if (username === undefined || username === "") {
    res.status(400).json({ error: "Username cannot be undefined or empty" });
    return;
  }

  res.locals.username = username;
  next();
}

export function validateUserID(req: Request, res: Response, next: CallableFunction): void {
  const id: string = req.params.id;

  if (id.length != 24) {
    res.status(400).json({ error: "Invalid id" });
    return;
  }

  res.locals.id = id;
  next();
}
import { Request, Response } from "express";
import dns from "dns";

export function validateURL(req: Request, res: Response, next: CallableFunction): void {
  const url: string | undefined = req.body.url;

  const errRes = { error: "invalid url" };

  if (url === undefined || url === "") {
    res.json(errRes);
    return;
  }

  try {
    const { hostname } = new URL(url);

    dns.lookup(hostname, (err) => {
      console.log(err)
      if (err) {
        res.json(errRes);
        return;
      }

      res.locals.url = url;
      next();
    });
    
  } catch(err) {
    res.json(errRes);
  }
}

export function validateID(req: Request, res: Response, next: CallableFunction): void {
  const id = req.params.id;
  const errRes = { error: "Wrong format" };

  if (id === undefined || typeof(id) !== "string") {
    res.json(errRes);
    return;
  }

  res.locals.id = id;
  next();
}
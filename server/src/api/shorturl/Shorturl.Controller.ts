import { Response, Request } from "express";
import crypto from 'crypto';
import { BaseController } from "../Base.Controller";
import { ShorturlModel } from "./Shorturl.Model";
import { Shorturl, ShorturlDB } from "./Shorturl.Interface";

export class ShorturlController extends BaseController {

  constructor() {
    super(new ShorturlModel());
  }

  async post(req: Request, res: Response): Promise<void> {
    const url: string = res.locals.url;

    try {
      const doc = await this.model.findOne<ShorturlDB>({ original_url: url });
      const shorturl: Shorturl = { original_url: url, short_url: "" };

      // URL exists
      if (doc !== null) {
        shorturl.short_url = doc.short_url;
        this.jsonRes(shorturl, res);
        return;
      }

      // Create new ShortURL
      const id: string = crypto.randomBytes(3).toString("hex");
      shorturl.short_url = id;
      await this.model.create(shorturl);
      this.jsonRes(shorturl, res);
      
    } catch(err) {
      this.errRes(err, res);
    }
  }

  async get(req: Request, res: Response): Promise<void> {
    const id: string = res.locals.id;

    try {
      const doc = await this.model.findOne<ShorturlDB>({ short_url: id });
      
      // URL does not exist
      if (doc === null) {
        this.errRes(null, res, "No short URL found for the given input");
        return;
      }

      // Redirect
      res.redirect(301, doc.original_url);

    } catch(err) {
      this.errRes(err, res);
    }
  }
}
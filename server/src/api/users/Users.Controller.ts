import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { UsersModel } from "./Users.Model";
import { UsersJSON, UsersDB } from "./Users.Interface";

export class UsersController extends BaseController {

  constructor() {
    super(new UsersModel());
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const username: string = res.locals.username;
    const prop = { username: username };

    try {
      const doc = await this.model.findOne<UsersDB>(prop);

      // Username exists
      if (doc != null) {
        this.errRes(null, res, "Username already exists", 400)
        return;
      }

      // Create new User
      const user = await this.model.create<UsersJSON>(prop);
      const resData = { username: user.username, _id: user._id };
      this.jsonRes(resData, res);

    } catch(err) {
      this.errRes(err, res);
    }
  }

  // async post(req: Request, res: Response): Promise<void> {
  //   const url: string = res.locals.url;

  //   try {
  //     const doc = await this.model.findOne<ShorturlDB>({ original_url: url });
  //     const shorturl: Shorturl = { original_url: url, short_url: "" };

  //     // URL exists
  //     if (doc !== null) {
  //       shorturl.short_url = doc.short_url;
  //       this.jsonRes(shorturl, res);
  //       return;
  //     }

  //     // Create new ShortURL
  //     const id: string = crypto.randomBytes(3).toString("hex");
  //     shorturl.short_url = id;
  //     await this.model.create(shorturl);
  //     this.jsonRes(shorturl, res);
      
  //   } catch(err) {
  //     this.errRes(err, res);
  //   }
  // }

  // async get(req: Request, res: Response): Promise<void> {
  //   const id: string = res.locals.id;

  //   try {
  //     const doc = await this.model.findOne<ShorturlDB>({ short_url: id });
      
  //     // URL does not exist
  //     if (doc === null) {
  //       this.errRes(null, res, "No short URL found for the given input");
  //       return;
  //     }

  //     // Redirect
  //     res.redirect(301, doc.original_url);

  //   } catch(err) {
  //     this.errRes(err, res);
  //   }
  // }
}
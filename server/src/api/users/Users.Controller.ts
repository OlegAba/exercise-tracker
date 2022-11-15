import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { UsersModel } from "./Users.Model";
import { UsersDB } from "./Users.Interface";

export class UsersController extends BaseController {

  constructor() {
    super(new UsersModel());
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const username: string = res.locals.username;
    const prop = { username: username.toLowerCase() };

    try {
      const doc = await this.model.findOne<UsersDB>(prop);

      // Username exists
      if (doc != null) {
        this.errRes(null, res, "Username already exists", 400)
        return;
      }

      // Create new User
      this.create(res, prop);

    } catch(err) {
      this.errRes(err, res);
    }
  }
}
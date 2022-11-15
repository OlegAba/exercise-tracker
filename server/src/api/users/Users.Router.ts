import { Router, Request, Response } from "express";
import { UsersController } from "./Users.Controller";
import { validateUsername } from "./Users.Validation";

const router = Router();
const controller = new UsersController();
const base = "/users";

router.post(
  base,
  validateUsername,
  (req: Request, res: Response) => {
    controller.createUser(req, res);
  }
);

router.get(
  base,
  (req: Request, res: Response) => {
    controller.findMany(res, {});
  }
);

export default router;
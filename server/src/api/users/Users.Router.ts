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

// router.post(
//   base, 
//   validateURL, 
//   (req: Request, res: Response) => { 
//     controller.post(req, res);
//   }
// );

// router.get(
//   `${base}/:id`, 
//   validateID,
//   (req: Request, res: Response) => { 
//     controller.get(req, res);
//   }
// );

export default router;
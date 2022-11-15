import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { ExercisesModel } from "./Exercises.Model";

export class ExercisesController extends BaseController {

  constructor() {
    super(new ExercisesModel());
  }

  async createExercise(req: Request, res: Response): Promise<void> {
    console.log(res.locals.user);
    this.jsonRes("TEMP", res);
  }
}
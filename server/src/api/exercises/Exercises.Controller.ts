import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { ExercisesModel } from "./Exercises.Model";
import { ExerciseJSON } from "./Exercises.Interface";

export class ExercisesController extends BaseController {

  constructor() {
    super(new ExercisesModel());
  }

  async createExercise(req: Request, res: Response): Promise<void> {
    const { id, username, description, duration } = res.locals;
    const date = res.locals.date !== undefined 
                  ? new Date(res.locals.date.replace(/-/g, '\/')) 
                  : new Date();

    try {
      // Create exercise
      const doc = await this.model.create<ExerciseJSON>({
        user: id,
        description: description,
        duration: duration,
        date: date
      });

      const exercise = {
        username: username,
        description: doc.description,
        duration: doc.duration,
        date: new Date(doc.date).toDateString(),
        _id: doc.user
      }

      this.jsonRes(exercise, res);

    } catch (error) {
      this.errRes(error, res);
    }
  }

  async getExercises(req: Request, res: Response): Promise<void> {
    const { id, username, fromDate, toDate, limit } = res.locals;

    try {
      // const exercises = await this.model.findMany<ExerciseJSON[]>({ user: id });
      const exercises = await this.model.mongooseModel.aggregate

      const log = {
        username: username,
        count: exercises.length,
        _id: id,
        log: exercises
      }

      this.jsonRes(log, res);

    } catch (error) {
      this.errRes(error, res);
    }
  }
}
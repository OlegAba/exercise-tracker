import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { ExercisesModel } from "./Exercises.Model";
import { Exercise, ExerciseJSON } from "./Exercises.Interface";

export class ExercisesController extends BaseController {

  constructor() {
    super(new ExercisesModel());
  }

  async createExercise(req: Request, res: Response): Promise<void> {
    const { id, username, description, duration } = res.locals;
    let { date } = res.locals;

    // Set date to now
    if (date == null) {
      date = new Date().toISOString().slice(0, 10);
    }

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

  async getAllExercises(req: Request, res: Response): Promise<void> {
    const { id, username } = res.locals;

    try {
      const exercises = await this.model.findMany<ExerciseJSON[]>({ user: id });
      
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
import { Response, Request } from "express";
import { BaseController } from "../Base.Controller";
import { ExercisesModel } from "./Exercises.Model";
import { Exercise, ExerciseDB } from "./Exercises.Interface";

export class ExercisesController extends BaseController {

  constructor() {
    super(new ExercisesModel());
  }

  async createExercise(req: Request, res: Response): Promise<void> {
    const { id, username, description, duration } = res.locals;

    const date = res.locals.date !== undefined 
                  ? new Date(res.locals.date.replace(/-/g, '\/')) 
                  : new Date();

    const doc: Exercise = {
      user_id: id,
      description: description,
      duration: duration,
      date: date
    }

    try {
      // Create exercise
      const exerciseDB = await this.model.create<ExerciseDB>(doc);

      const exercise = {
        _id: exerciseDB.user_id,
        username: username,
        description: exerciseDB.description,
        duration: exerciseDB.duration,
        date: new Date(exerciseDB.date).toDateString()
      }

      this.jsonRes(exercise, res);

    } catch (error) {
      this.errRes(error, res);
    }
  }

  async getExercises(req: Request, res: Response): Promise<void> {
    const { id, username, limit, fromDate, toDate } = res.locals;

    try {
      const exercises = await (this.model as ExercisesModel)
                          .findExercises(id, fromDate, toDate, limit);

      const log: object[] = [];
      const userLog = {
        username: username,
        count: exercises.length,
        _id: id,
        log: log
      }

      exercises.forEach(exercise => {
        const formattedDate = new Date(exercise.date).toDateString();
        const formattedExercise = {
          description: exercise.description,
          duration: exercise.duration,
          date: formattedDate
        }
        userLog.log.push(formattedExercise)
      })

      this.jsonRes(userLog, res);

    } catch (error) {
      this.errRes(error, res);
    }
  }
}
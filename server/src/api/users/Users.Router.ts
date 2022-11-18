import { Router, Request, Response } from "express";
import { UsersController } from "./Users.Controller";
import { validateUsername, validateUserID } from "./Users.Validation";
import { ExercisesController } from "../exercises/Exercises.Controller";
import { validateExercise, validateQuery } from "../exercises/Exercises.Validation";

const router = Router();
const usersController = new UsersController();
const exercisesController = new ExercisesController();
const base = "/users";

router.post(
  base,
  validateUsername,
  usersController.createUser.bind(usersController)
);

router.get(
  base,
  (_, res: Response) => {
    usersController.findMany(res, {});
  }
);

router.post(
  `${base}/:id/exercises`,
  validateUserID,
  validateExercise,
  usersController.getUser.bind(usersController),
  exercisesController.createExercise.bind(exercisesController)
)

router.get(
  `${base}/:id/logs`,
  validateUserID,
  validateQuery,
  usersController.getUser.bind(usersController),
  exercisesController.getExercises.bind(exercisesController)
)

export default router;
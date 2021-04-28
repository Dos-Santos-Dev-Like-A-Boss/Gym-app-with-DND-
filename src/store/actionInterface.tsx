import { ExerciseActions } from "./actions/exercisesActions";

export interface IAction<T = any> {
   type: ExerciseActions;
   payload: T;
}

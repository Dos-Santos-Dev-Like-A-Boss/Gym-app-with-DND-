import { IExercise } from "./reducers/exerciseReducer";

export interface IAction {
   type: string,
   payload?: string | IExercise
}
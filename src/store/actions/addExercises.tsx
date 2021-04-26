import { IExercise } from "../reducers/exercisesReducer"

export enum ExerciseActions{
   ADD_NEW_EXERCISE = "ADD_NEW_EXERCISE",
   DROP_ITEM = "DROP_ITEM",
   COPY_ITEM = "COPY_ITEM"
}

export const addExercise = (newData: IExercise) => {
   return {
      type: ExerciseActions.ADD_NEW_EXERCISE,
      payload: newData
   }
}


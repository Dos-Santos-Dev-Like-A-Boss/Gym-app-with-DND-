import { IExercise } from "../reducers/exercisesReducer"

export enum ExerciseActions{
   ADD_NEW_EXERCISE = "ADD_NEW_EXERCISE",
   SHUFFLE_ITEMS = "SHUFFLE_ITEMS",
   COPY_ITEM_AND_DROP = "COPY_ITEM_AND_DROP",
   REMOVE_ITEM_AND_DROP = "REMOVE_ITEM_AND_DROP"
}

export const addExercise = (newData: IExercise) => {
   return {
      type: ExerciseActions.ADD_NEW_EXERCISE,
      payload: newData
   }
}

export const shuffleItems = (newData: IExercise) => {
   return {
      type: ExerciseActions.SHUFFLE_ITEMS,
      payload: newData
   }
}
export const copyAndDrop = (newData: IExercise) => {
   return {
      type: ExerciseActions.COPY_ITEM_AND_DROP,
      payload: newData
   }
}
export const removeAndDrop = (newData: IExercise) => {
   return {
      type: ExerciseActions.REMOVE_ITEM_AND_DROP,
      payload: newData
   }
}





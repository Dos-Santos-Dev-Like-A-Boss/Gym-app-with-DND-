import { DropResult } from "react-beautiful-dnd"
import { DroppableIdType, IExercise } from "../reducers/exercisesReducer"

export enum ExerciseActions{
   ADD_NEW_EXERCISE = "ADD_NEW_EXERCISE",
   SHUFFLE_ITEMS = "SHUFFLE_ITEMS",
   COPY_ITEM_AND_DROP = "COPY_ITEM_AND_DROP",
   REMOVE_ITEM_AND_DROP = "REMOVE_ITEM_AND_DROP",
   DROP_EXERCISE = "DROP_EXERCISE",
}

export interface IDropExerciseActionPayload {
   exerciseId: string;
   column: DroppableIdType;
}

export const addExercise = (newData: IExercise) => {
   return {
      type: ExerciseActions.ADD_NEW_EXERCISE,
      payload: newData
   }
}

export const shuffleItems = (newData: DropResult) => {
   return {
      type: ExerciseActions.SHUFFLE_ITEMS,
      payload: newData
   }
}
export const copyAndDrop = (newData: DropResult) => {
   return {
      type: ExerciseActions.COPY_ITEM_AND_DROP,
      payload: {
         ...newData,
         newId : Math.random().toString().slice(-4)
      }
   }
}
export const removeAndDrop = (newData: DropResult) => {
   return {
      type: ExerciseActions.REMOVE_ITEM_AND_DROP,
      payload: newData
   }
}

export const dropExercise = (payload: IDropExerciseActionPayload) => {
   return {
      type: ExerciseActions.DROP_EXERCISE,
      payload: payload
   }
}




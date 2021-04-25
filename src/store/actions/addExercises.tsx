import { IExercise } from "../reducers/exerciseReducer"

export const addExercise = (newData: IExercise) => {
   return {
      type: "ADD_NEW_EXERCISE",
      payload: newData
   }
}


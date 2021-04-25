import { IAction } from "../actionInterface"

interface IExercises  {
   exerciseList: IExercise[],
   exerciseText?: string
}

export interface IExercise {
   name: string,
   duration?: number,
   id: string
}

const initialState:IExercises = {
   exerciseList: [],
   exerciseText: ''
}



export default function exerciseReducer(state = initialState, action: IAction) {
   switch (action.type) {
      case "ADD_NEW_EXERCISE":
         return {
            exerciseList: [...state.exerciseList, action.payload],
            exerciseText: ''
         }
      case "CHANGE_EXERCISE":
         return {
            ...state,
            exerciseText: action.payload
         }
      default:
         return state
         
   }
}
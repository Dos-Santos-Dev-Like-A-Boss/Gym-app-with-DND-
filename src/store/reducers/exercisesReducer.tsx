import { IAction } from "../actionInterface";
import { ExerciseActions } from "../actions/addExercises";

export enum DroppbleIds  {
   DEFAULT = 'DEFAULT_EXERCISE',
   MONDAY = 'MONDAY_EXERCISE',
   TUESDAY = 'TUESDAY_EXERCISE',
   WEDNESDAY = 'WEDNESDAY_EXERCISE',
   THURSDAY = 'THURSDAY_EXERCISE',
   FRIDAY = 'FRIDAY_EXERCISE',
   SATURDAY = 'SATURDAY_EXERCISE',
   SUNDAY = 'SUNDAY_EXERCISE',
}

export const droppbleIds = [
   DroppbleIds.DEFAULT, DroppbleIds.MONDAY, DroppbleIds.TUESDAY, DroppbleIds.WEDNESDAY,
   DroppbleIds.THURSDAY, DroppbleIds.FRIDAY, DroppbleIds.SATURDAY, DroppbleIds.SUNDAY
]

export interface IExercise {
   name: string,
   duration: string,
   id: string
}

export interface IExercisesReducer {
   columns : Record<string,any>
}

const initialState: IExercisesReducer  = {
   columns: {
      [DroppbleIds.DEFAULT]: [],
      [DroppbleIds.MONDAY]: [],
      [DroppbleIds.TUESDAY]: [],
      [DroppbleIds.WEDNESDAY]: [],
      [DroppbleIds.THURSDAY]: [],
      [DroppbleIds.FRIDAY]: [],
      [DroppbleIds.SATURDAY]: [],
      [DroppbleIds.SUNDAY]: []
   },
}

export default function dataReducer(state = initialState, action:IAction) {
   switch (action.type) {
      case ExerciseActions.ADD_NEW_EXERCISE :
         return {
            ...state,
            columns: {
               ...state.columns,
               [DroppbleIds.DEFAULT]: [...state.columns[DroppbleIds.DEFAULT], action.payload]
            }
         }
      case ExerciseActions.DROP_ITEM :
         return {
            ...state,
            columns: {
               ...state.columns,

            } 
         }
      case ExerciseActions.COPY_ITEM:
         return {
            ...state,
            columns: {
               ...state.columns,
               [DroppbleIds.DEFAULT]: [...state.columns.DroppbleIds.DEFAULT]
            }
         }
      default : return state
   }
}
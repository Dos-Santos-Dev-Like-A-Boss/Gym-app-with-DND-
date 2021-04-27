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

export default function dataReducer(state = initialState,{type,payload}:IAction) {
   switch (type) {
      case ExerciseActions.ADD_NEW_EXERCISE :
         return {
            ...state,
            columns: {
               ...state.columns,
               [DroppbleIds.DEFAULT]: [...state.columns[DroppbleIds.DEFAULT], payload]
            }
         }
      case ExerciseActions.SHUFFLE_ITEMS :
         
         return {
            ...state,
            columns: {
               ...state.columns,
               [payload.droppableId]: [...state.columns[payload.droppableId],payload]
               
            } 
         }
      case ExerciseActions.COPY_ITEM_AND_DROP :
         return {
            ...state,
            columns: {
               ...state.columns,
               [payload.destination.droppableId] : [...state.columns[payload.destination.droppableId],
               payload],
               [DroppbleIds.DEFAULT]: [...state.columns.DroppbleIds.DEFAULT]
            }
         }
         case ExerciseActions.REMOVE_ITEM_AND_DROP :
            return {
               ...state,
               columns: {
                  ...state.columns,

               }
            }
      default : return state
   }
}
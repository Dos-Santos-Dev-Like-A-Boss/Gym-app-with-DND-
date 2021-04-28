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
      case ExerciseActions.SHUFFLE_ITEMS:
         let dragId = payload.draggableId
         let dropId = payload.destination.droppableId
         let fromIndex = payload.source.index
         let toIndex = payload.destination.index
         let itemCopy = state.columns[dropId][fromIndex] 
         let myArr = state.columns[dropId].slice()
         let item = myArr.splice(fromIndex, 1)[0]
         myArr.splice(toIndex,0,item)
         console.log('ARRAY Copy: ',myArr)
         console.log("ITEM SPLICE :",item)
         
         // myArr.splice(toIndex,0,item)
         
         return {
            ...state,
            columns: {
               ...state.columns,
               [dropId]: myArr
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
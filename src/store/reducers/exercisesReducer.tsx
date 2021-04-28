import { IAction } from "../actionInterface";
import { ExerciseActions } from "../actions/exercisesActions";

export enum DroppableIdType  {
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
   DroppableIdType.DEFAULT,
   DroppableIdType.MONDAY,
   DroppableIdType.TUESDAY,
   DroppableIdType.WEDNESDAY,
   DroppableIdType.THURSDAY,
   DroppableIdType.FRIDAY,
   DroppableIdType.SATURDAY,
   DroppableIdType.SUNDAY
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
      [DroppableIdType.DEFAULT]: [],
      [DroppableIdType.MONDAY]: [],
      [DroppableIdType.TUESDAY]: [],
      [DroppableIdType.WEDNESDAY]: [],
      [DroppableIdType.THURSDAY]: [],
      [DroppableIdType.FRIDAY]: [],
      [DroppableIdType.SATURDAY]: [],
      [DroppableIdType.SUNDAY]: []
   },
}

export default function exercisesReducer(state = initialState, {type, payload}: IAction) {
   switch (type) {
      case ExerciseActions.ADD_NEW_EXERCISE :
         return {
            ...state,
            columns: {
               ...state.columns,
               [DroppableIdType.DEFAULT]: [...state.columns[DroppableIdType.DEFAULT], payload]
            }
         }
      case ExerciseActions.SHUFFLE_ITEMS: {
         
         const { index: fromIndex } = payload.source;
         const { index: toIndex, droppableId: destinationId } = payload.destination;
         const newArr = state.columns[destinationId].slice()
         const item = newArr.splice(fromIndex, 1)[0]
         newArr.splice(toIndex, 0, item)

            return {
               ...state,
               columns: {
                  ...state.columns,
                  [destinationId]: newArr
               }
            }
         }
      case ExerciseActions.COPY_ITEM_AND_DROP: {
         
         const { index: fromIndex, droppableId: sourceId } = payload.source;
         const { index: toIndex, droppableId: destinationId} = payload.destination;

         const newSourceCopy = state.columns[sourceId].slice();
         const item = newSourceCopy.splice(fromIndex, 1)[0];
         state.columns[destinationId].splice(toIndex, 0, item);
         const newSourceItem = { ...item, id: payload.newId };
         state.columns[sourceId][fromIndex] = newSourceItem
         
         return {
            ...state,
            columns: {
               ...state.columns,
            }
         }
      }
      case ExerciseActions.REMOVE_ITEM_AND_DROP: {
         
         const { index: fromIndex, droppableId: sourceId } = payload.source;
         const { index: toIndex, droppableId: destinationId } = payload.destination;
         
         const item = state.columns[sourceId].splice(fromIndex, 1)[0];

         const newDestinatinArr = state.columns[destinationId];
         newDestinatinArr.splice(toIndex, 0, item);
         return {
            ...state,
            columns: {
               ...state.columns,
               [sourceId]: [...state.columns[sourceId]],
               [destinationId]: newDestinatinArr
            }
         }
      }
      case ExerciseActions.DROP_EXERCISE: {
         const { exerciseId, column } = payload;
         const newArr = state.columns[column].filter((exercise: IExercise) => exercise.id !== exerciseId);
         return {
            ...state,
            columns: {
               ...state.columns,
               [column]: newArr,
            }
         }
      }
      default : return state
   }
}
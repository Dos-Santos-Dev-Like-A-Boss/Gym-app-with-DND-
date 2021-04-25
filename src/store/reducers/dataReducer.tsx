import { IAction } from "../actionInterface";

const initialState = {
   columns: {
      'column-1': {
         id: 'column-1',
         exerciseList: []
      }, 'column-2': {
         id: 'column-2',
         exerciseList: []
      }, 'column-3': {
         id: 'column-3',
         exerciseList: []
      }, 'column-4': {
         id: 'column-4',
         exerciseList: []
      }, 'column-5': {
         id: 'column-5',
         exerciseList: []
      }, 'column-6': {
         id: 'column-6',
         exerciseList: []
      }, 'column-7': {
         id: 'column-7',
         exerciseList: []
      }, 'column-8': {
         id: 'column-8',
         exerciseList: []
      },
   }
}

export default function dataReducer(state = initialState, action:IAction) {
   switch (action.type) {
      default: return state
   }
}
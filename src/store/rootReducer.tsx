import { combineReducers } from 'redux';
// import changeExerciseReducer from './reducers/changeExerciseReducer';
import exerciseReducer from './reducers/exerciseReducer'

const reducers = combineReducers({
   data: exerciseReducer
})
export type RootState = ReturnType<typeof reducers>

export default combineReducers({
   data: exerciseReducer
})


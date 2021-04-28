import { combineReducers } from 'redux';
import exercisesReducer from './reducers/exercisesReducer'

const reducers = combineReducers({
   data: exercisesReducer,
});
export type RootState = ReturnType<typeof reducers>;

export default reducers;


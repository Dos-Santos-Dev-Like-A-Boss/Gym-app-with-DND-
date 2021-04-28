import React, { useCallback } from 'react';
import styles from './Day.module.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { DroppableIdType, droppbleIds, IExercise } from '../../store/reducers/exercisesReducer';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { dropExercise, IDropExerciseActionPayload } from '../../store/actions/exercisesActions';

interface IProps {
   numOfDay: number;
   dayId: DroppableIdType;
}

const Day: React.FC<IProps> = (props) => {
   
   const exerciseList: IExercise[] = useSelector((state: RootState) => state.data.columns[droppbleIds[props.numOfDay]]);

   const dispatch = useDispatch();

   const removeExercise = useCallback((payload: IDropExerciseActionPayload) => {
      dispatch(dropExercise(payload));
   }, [dispatch]);

   return (
      <div className={styles.wrapper}>
         <div className={styles.number}>{props.numOfDay }</div>
         <hr />
         <input className={styles.inputTitle} placeholder="Day title"/>
         
         <Droppable droppableId={props.dayId}>
               {(providet) => {
                  return (
                     <div
                        className={styles.exercises}
                        ref={providet.innerRef}
                        {...providet.droppableProps}
                     >
                        {exerciseList.map(({ name, id, duration }, i) => {
                           return (
                              <Draggable key={id} index={i} draggableId={id}>
                                 {(providet) => {
                                    return (
                                       <div
                                          className={styles.exercise}
                                          ref={providet.innerRef}
                                          {...providet.draggableProps}
                                          {...providet.dragHandleProps}
                                       >
                                          <div className={styles.exercise}>
                                             <p className={styles.exercise_name}>{name}</p>
                                             <p className={styles.exercise_duration}>{duration}</p>
                                          </div>
                                          <div onClick={() => removeExercise({ exerciseId: id, column: props.dayId })} className={styles.exercise_remove}>
                                             <FontAwesomeIcon icon={faTimes} />
                                          </div>
                                       </div>
                                    )
                                 }}
                              </Draggable>
                           )
                        })}
                        {providet.placeholder}
                     </div>
                  )
            }}
            </Droppable>
         
      </div>
   )
}

export default Day
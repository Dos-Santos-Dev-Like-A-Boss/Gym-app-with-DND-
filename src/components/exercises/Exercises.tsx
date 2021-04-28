import React, { useState } from 'react';
import styles from './Exercises.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IExercise } from '../../store/reducers/exercisesReducer';
import { RootState } from '../../store/rootReducer';
import ModalWindow from '../modalWindow/ModalWindow';
import { droppbleIds, DroppbleIds } from '../../store/reducers/exercisesReducer';
import  { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Exercises = () => {

   const [visible, setVisible] = useState(false);
   const exerciseList: IExercise[] = useSelector((state: RootState) => state.data.columns[DroppbleIds.DEFAULT]);

   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      setVisible(!visible);
   }

   return (
      <> {visible ? <ModalWindow visible={onClickHandler}/> : null}
         <div className={styles.wrapper}>
            <div className={styles.form}>
               <div className={styles.title}>Default exercises</div>
               
               <Droppable droppableId={droppbleIds[0]}>
                  {(providet) => {
                     return (
                        <div
                           ref={providet.innerRef}
                           {...providet.droppableProps}
                           className={styles.exercise_list_wrapper}
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
                                             <span>{name + " :" + duration}</span>
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
               <button className={styles.button} onClick={onClickHandler} >
                  <FontAwesomeIcon icon={faPlusCircle} /> add
                  </button>
            </div>
         </div>
      </>
   )
}

export default Exercises
import React, { useCallback, useState } from 'react';
import styles from './Exercises.module.css';
import { useSelector } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IExercise } from '../../store/reducers/exercisesReducer';
import { RootState } from '../../store/rootReducer';
import ModalWindow from '../modalWindow/ModalWindow';
import { droppbleIds, DroppableIdType } from '../../store/reducers/exercisesReducer';
import  { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Exercises: React.FC = () => {

   const [visible, setVisible] = useState(false);
   const exerciseList: IExercise[] = useSelector((state: RootState) => state.data.columns[DroppableIdType.DEFAULT]);

   const onChangeModalVisibility = useCallback(() => {
      setVisible(!visible);
   }, [setVisible, visible]);

   return (
      <>
         <div className={styles.wrapper}>
            <div className={styles.form}>
               <div className={styles.title}>Default exercises</div>
               
               <Droppable droppableId={droppbleIds[0]}>
                  {(providet) => {
                     return (
                        <div
                           className={styles.exercise_list_wrapper}
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
                                             <div>{name}</div>
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
               <button className={styles.button} onClick={onChangeModalVisibility} >
                  <FontAwesomeIcon icon={faPlusCircle} /> add
                  </button>
            </div>
         </div>
         <ModalWindow isVisible={visible} changeVisibility={onChangeModalVisibility} />
      </>
   )
}

export default Exercises
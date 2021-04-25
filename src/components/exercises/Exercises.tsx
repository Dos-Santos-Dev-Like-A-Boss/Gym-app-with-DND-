import React from 'react';
import styles from './Exercises.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { addExercise } from '../../store/actions/addExercises';
import { changeExercise } from '../../store/actions/changeExercise';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { IExercise } from '../../store/reducers/exerciseReducer';



const Exercises = () => {

   const dispatch = useDispatch();
   const exerciseList: IExercise[] = useSelector((state:any) => state.data.exerciseList);
   const exeriseText:string = useSelector((state: any) => state.data.exerciseText);

   const showExercises = (): any => {
      return exerciseList.map(({name,id,duration}, i) => {
         
         return (
            <div id={id} key={`${name}${id}`} className={styles.exercise}>
               <p className={styles.text}>{name }</p>
            </div>
         )
      })
   }

   const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
      let id = Math.random().toString().slice(-4)
      let exercise = { name: exeriseText, id }
      dispatch(addExercise(exercise))
   }
   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(changeExercise(e.target.value))
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.form}>
         <div className={styles.title}>Default exercises</div>
            <input className={styles.input} type="text" onChange={onChangeHandler} value={exeriseText} />
            <button className={styles.button} onClick={onClickHandler} >add</button>
            <Droppable droppableId='exercise_column'>
               {(providet, snapshot) => {
                  return (
                     <div
                        ref={providet.innerRef}
                        {...providet.droppableProps}
                        className={styles.exercise_list_wrapper}
                     >
                        {exerciseList.map(({ name, id, duration }, i) => {
                           return (
                              <Draggable key={id} index={i} draggableId={id}>
                                 {(providet, snapshot) => {
                                    console.log(snapshot)
                                    return (
                                       <div
                                          className={styles.exercise}
                                          ref={providet.innerRef}
                                          {...providet.draggableProps}
                                          {...providet.dragHandleProps}
                                       >
                                       {name}
                                       </div>
                                    )
                                 }}
                              {/* <div id={id} key={`${name}${id}`} className={styles.exercise}>
                                 <p className={styles.text}>{name}</p>
                              </div> */}
                              </Draggable>
                           )
                        })}
                        {providet.placeholder}
                     </div>
                  )
               } }
            </Droppable>
            {/* <div className={styles.exercise_list_wrapper}>{showExercises()}</div> */}
         </div>
      </div>
   )
}

export default Exercises
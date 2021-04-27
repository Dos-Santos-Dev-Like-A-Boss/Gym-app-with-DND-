import styles from './ModalWindow.module.css';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExercise } from '../../store/actions/addExercises'
import { IExercise } from '../../store/reducers/exercisesReducer';

const ModalWindow = (props:any) => {



   const initialState: IExercise = {
      name: '',
      duration: '',
      id: ''
   }

   const [exercise, setExercise] = useState(initialState)
   const dispatch = useDispatch();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setExercise({
         ...exercise,
         [e.target.name]: e.target.value
      })
   }

   const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      if (exercise.name && exercise.duration) {
         const newExercise = {
            ...exercise,
            id:Math.random().toString().slice(-4)
         } 
         dispatch(addExercise(newExercise))
         setExercise(initialState)
         props.visible()
      } else return
   }

   return (
            <div className={styles.wrapper}>
               <form className={styles.form}>
                  <input className={styles.input} name="name" type="text"
                  placeholder="Name of exercise" onChange={handleChange} value={exercise.name} />
                  <input className={styles.input} name="duration" type="text"
                  placeholder="Exercise duration" onChange={handleChange} value={exercise.duration} />
                  <button onClick={handleClick} className={styles.button}>Add exercise</button>
               </form>
            </div>
   )

}
export default ModalWindow

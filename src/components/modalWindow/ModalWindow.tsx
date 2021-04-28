import styles from './ModalWindow.module.css';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExercise } from '../../store/actions/exercisesActions'
import { IExercise } from '../../store/reducers/exercisesReducer';

interface IProps {
   changeVisibility(): void;
   isVisible: boolean;
}

const initialExercise: IExercise = {
   name: '',
   duration: '',
   id: ''
} 

const ModalWindow: React.FC<IProps> = ({ changeVisibility, isVisible }) => {

   const [exercise, setExercise] = useState<IExercise>(initialExercise);
   const dispatch = useDispatch();

   const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setExercise({
         ...exercise,
         [e.target.name]: e.target.value,
      })
   }, [setExercise, exercise]);

   const handleClick = useCallback((e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (exercise.name && exercise.duration) {
         const newExercise = {
            ...exercise,
            id: Math.random().toString().slice(-4)
         }
         dispatch(addExercise(newExercise));
         setExercise(initialExercise);
         changeVisibility();
      }
   }, [exercise, changeVisibility, dispatch]);

   if (!isVisible) {
      return null;
   }

   return (
      <div onClick={changeVisibility} className={styles.backdrop}>
         <div onClick={(e) => e.stopPropagation()} className={styles.wrapper}>
            <form onSubmit={handleClick} className={styles.form}>
               <input
                  className={styles.input}
                  name="name"
                  type="text"
                  placeholder="Name of exercise"
                  onChange={handleChange}
                  value={exercise.name}
               />
               <input
                  className={styles.input}
                  name="duration"
                  type="number"
                  placeholder="Exercise duration"
                  onChange={handleChange}
                  value={exercise.duration}
               />
               <button onClick={handleClick} type="submit" className={styles.button}>Add exercise</button>
            </form>
         </div>
      </div>
   )

}
export default ModalWindow

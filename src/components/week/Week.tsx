import React, { useCallback } from 'react';
import styles from './Week.module.css';
import Day from '../day/Day';
import { droppbleIds } from '../../store/reducers/exercisesReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';



const Week = () => {

   const columns = useSelector((state: RootState) => state.data.columns)
   const spawnDays = useCallback(() => {
      return droppbleIds.slice(1).map((el, i) => {
         return (
            <Day numOfDay={i+1} dayId={el} exercise={columns[el]} />
         )
      })
   }, [columns])

   return (

      <div className={styles.wrapper}>
         <div className={styles.title}> Week 1</div>
         <div className={styles.daysWrapper}>
            {spawnDays()}
         </div>
      </div>
   )
}

export default Week
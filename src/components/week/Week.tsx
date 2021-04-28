import React from 'react';
import styles from './Week.module.css';
import Day from '../day/Day';
import { droppbleIds } from '../../store/reducers/exercisesReducer';



const Week = () => {

   return (

      <div className={styles.wrapper}>
         <div className={styles.title}> Week 1</div>
         <div className={styles.daysWrapper}>
            {droppbleIds.slice(1).map((el, i) => {
               return (
                  <Day key={el} numOfDay={i + 1} dayId={el} />
               )
            })}
         </div>
      </div>
   )
}

export default Week
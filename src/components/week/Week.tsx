import React from 'react';
import styles from './Week.module.css';
import Day from '../day/Day'

const Week = () => {
   return (
         <div className={styles.wrapper}>
            <p className={styles.title}>Week 1</p>
            <div className={styles.daysWrapper}>
            <Day numOfDay={1} />
            <Day numOfDay={2} />
            <Day numOfDay={3} />
            <Day numOfDay={4} />
            <Day numOfDay={5} />
            <Day numOfDay={6} />
            <Day numOfDay={7} />
            </div>
         </div>
   )
}

export default Week
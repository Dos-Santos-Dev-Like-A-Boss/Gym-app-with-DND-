import React from 'react';
import styles from './Day.module.css';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Day = (props: any) => {
   
   
   return (
      <div className={styles.wrapper}>
         <div className={styles.number}>{props.numOfDay }</div>
         <hr />
         <input className={styles.inputTitle} placeholder="Day title"/>
         
            <Droppable droppableId={props.dayId}>
               {(providet, snapshot) => {
                  return (
                     <div
                        className={styles.exercises}
                        ref={providet.innerRef}
                        {...providet.droppableProps}
                     >
                        {}
                     </div>
                  )
            }}
            </Droppable>
         
      </div>
   )
}

export default Day
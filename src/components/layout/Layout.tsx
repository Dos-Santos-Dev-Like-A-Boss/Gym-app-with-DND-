import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Exercises from '../exercises/Exercises';
import Week from '../week/Week';
import styles from './Layout.module.css';

const Layout = () => {
   return (
      <div className={styles.wrapper}>
         <DragDropContext onDragEnd={e => console.log(e)}>
         <Exercises />
         <Week />
         </DragDropContext>
      </div>
   )
}
export default Layout
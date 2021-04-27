import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Exercises from '../exercises/Exercises';
import Week from '../week/Week';
import styles from './Layout.module.css';
import { DroppbleIds } from '../../store/reducers/exercisesReducer';

const Layout = () => {

   const handleDragEnd = (e:any) => {
      if(!e.destination || e.source.droppableId === e.destination.droppableId &&
         e.source.index === e.destination.index){ 
            return 
      } else {
         if(e.source.droppableId === e.destination.droppableId){
            //let obj = {
            // from : e.draggble id
            //}
            //SHUFFLE_ITEMS dispatch(shufleItems())
         }
         else if(e.source.droppableId === DroppbleIds.DEFAULT &&
            e.destination.droppableId !== DroppbleIds.DEFAULT ) {
            //COPY_ITEM_AND_DROP
            // let copy = e
         }
         else if(e.source.droppableId !== DroppbleIds.DEFAULT &&
            e.destination.droppableId !== DroppbleIds.DEFAULT) {
               //REMOVE_ITEM_AND_DROP
            }
         console.log(e)
         console.log('from :' , e.source )
         console.log('to :', e.destination)
   }
   }

   return (
      <div className={styles.wrapper}>
         <DragDropContext onDragEnd={handleDragEnd}>
         <Exercises />
         <Week />
         </DragDropContext>
      </div>
   )
}
export default Layout
import React from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import Exercises from '../exercises/Exercises';
import Week from '../week/Week';
import styles from './Layout.module.css';
import { DroppableIdType } from '../../store/reducers/exercisesReducer';
import { useDispatch } from 'react-redux';
import { shuffleItems, copyAndDrop, removeAndDrop } from '../../store/actions/exercisesActions';

const Layout: React.FC = () => {

   const dispatch = useDispatch();
   const handleDragEnd = (e: DropResult) => {
      console.log(e);
      // item dropped outside provider
      if (!e.destination) {
         return;
      }
      const shouldCopyAndDrop = e.source.droppableId === DroppableIdType.DEFAULT &&
         e.destination.droppableId !== DroppableIdType.DEFAULT;
      const shouldSort = e.source.droppableId === e.destination.droppableId;
      const isNotChanged = e.source.droppableId === e.destination.droppableId &&
         e.source.index === e.destination.index;
      const shouldRemoveAndDrop = e.source.droppableId !== DroppableIdType.DEFAULT &&
         e.destination.droppableId !== DroppableIdType.DEFAULT;

      if (isNotChanged) {
         return
      }
      if (shouldSort) {
         dispatch(shuffleItems(e));
      }
      else if (shouldCopyAndDrop) {
         dispatch(copyAndDrop(e));
      }
      else if (shouldRemoveAndDrop) {
         dispatch(removeAndDrop(e));
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
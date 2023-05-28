'use client'

import { useBoardStore } from '@/store/BoardStore'
import React, { useEffect } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
type Props = {}

const Board = (props: Props) => {
const getBoard = useBoardStore((state) => state.getBoard);

useEffect(()=>{
    getBoard();
},[getBoard]);

  return (
    <div>hello</div>
    // <DragDropContext>
    //     <Droppable droppableId='board' direction='horizontal' type='column'>
    //         {(provider) =>(
    //             <div>
    //                 {/* rendering all columns */}
    //             </div>
    //         )}

    //     </Droppable>
    // </DragDropContext>
  )
}

export default Board
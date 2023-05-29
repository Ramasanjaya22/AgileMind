import { XCircleIcon } from '@heroicons/react/20/solid';
import React from 'react'
import {DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';

type Props = {
    todo: Todo;
    index: number;
    id: TypedColumn;
    innerRef: (element:HTMLElement| null) => void;
    draggableProps: DraggableProvidedDraggableProps;
    dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
}

function TodoCard({
    todo,
    index,
    id,
    innerRef,
    draggableProps,
    dragHandleProps,
}: Props) {
  return (
    <div
    className='bg-white rounded-md shadow-md space-y-2'
    {...draggableProps}
    {...dragHandleProps}
    ref={innerRef}
    >
        <div className='flex justify-between items-center p-5'>
            <p>{todo.title}</p>
            <button className='text-red-500 hover:text-red-600'>
                <XCircleIcon className='ml-5 h-8 w-8' />
            </button>
            </div>
        {/* {imageUrl && (

        )} */}
    </div>
  )
}

export default TodoCard
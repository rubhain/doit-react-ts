import React from 'react'
import { useParams } from 'react-router-dom'
import KanbanBoard from '../components/KanbanBoard/KanbanBoard';

function Board() {
    const { id } = useParams();
    return (
        <div><KanbanBoard id={id} /></div>
    )
}

export default Board
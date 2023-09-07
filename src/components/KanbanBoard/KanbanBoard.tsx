import React from 'react'
import { useGetSelectedBoardQuery } from '../../storage/reducers/apiSlice'


function KanbanBoard(props: any) {
    const id = props.id
    const { data, isLoading } = useGetSelectedBoardQuery(id)
    if (isLoading === true) {
        return <div>Loading...</div>
    }
    return (
        <div className='kanban-container'>{data.title}</div>
    )
}

export default KanbanBoard
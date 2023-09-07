import React from 'react'
import { useGetSelectedBoardQuery } from '../../storage/apiSlice'


function KanbanBoard(props: any) {
    const id = props.id
    const { data, isLoading } = useGetSelectedBoardQuery(id)
    if (isLoading === true) {
        return <div>Loading...</div>
    }
    return (
        <div>{data.title}</div>
    )
}

export default KanbanBoard
import React from 'react'
import useGet from './useGet'

const Todos = () => {
    const data = useGet("https://dummyjson.com/todos")
    return (
        <div>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
                {data?.todos?.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.todo}</td>
                </tr>
            ))}
            </table>
        </div>
    )
}

export default Todos
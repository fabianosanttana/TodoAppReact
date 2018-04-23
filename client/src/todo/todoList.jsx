import React from 'react'
import IconButton from "../template/iconButton";
export default props => {
    const list = props.list || []

    const renderRows = () =>{
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                    <td><IconButton hide="false" style="danger" icon="remove" onClick={props.handleDelete(todo._id)}/></td>
                </tr>
            ))
        )
    }

    return (
        <table className='table'>
        <thead>
            <tr>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            {renderRows(props.rows)}
        </tbody>
        </table>
    )
}
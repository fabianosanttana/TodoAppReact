import React from 'react'

export default props => {
    const list = props.list || []

    const renderRows = () =>{
        return (
            list.map(todo => (
                <tr>
                    <td>{todo.description}</td>
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
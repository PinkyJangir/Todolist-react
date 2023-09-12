import React, { useState } from 'react'

function TodoList(props) {
    const [isEdit, setIsEdit] =useState(false)
    const [editValue,setEditValue]= useState(props.item)
    return (
        <>
            <li className='list-item'>
                {isEdit?<div>
                    <input  style={{border: 'none', outline: 'none',background:'whitesmoke'}}value={editValue} onChange={e=>setEditValue(e.target.value)}/>
                    <span className='icons'>
                    <i className="fa-solid fa-check" onClick={()=> {
                        props.editTodoList(props.index, editValue)
                        setIsEdit(false)
                    }}></i>
                    <i className="fa-solid fa-xmark" onClick={()=>setIsEdit(false)}></i>
                    </span>
                </div>:
                <div>{props.item}
                <span className='icons'>
                <i className="fa-solid fa-pen-to-square"
                        onClick={e => {
                            setIsEdit(true)
                            setEditValue(props.item)
                        }}></i>
                    <i className="fa-solid fa-trash icon-delete"
                        onClick={e => {
                            props.deleteItem(props.index)
                        }}></i>
                </span></div>}
            </li>
        </>
    )
}

export default TodoList
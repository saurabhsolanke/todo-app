import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container my-3" style={myStyle}>
        <h3 classNam="my-3">Todos List</h3>
        {props.todos.length==0? "No todos to Display ":
            props.todos.map((todo)=>{
                return (
                <>
                    <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                    <hr></hr>
                </>
                )
            })
        }
        </div>
    )
}

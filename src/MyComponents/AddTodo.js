import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description canot be blank ")
            }
            else{
                addTodo(title, desc);
                setTitle("");
                setDesc("");
            }
            
    }
    
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" placeholder="Enter Title"/>
                    {/* <small id="emailHelp" className ="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>
                <div className="form-group">
                    <br />
                    <label htmlFor="desc">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" placeholder="Enter Description"/>
                </div>
                <div className="form-group form-check">
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

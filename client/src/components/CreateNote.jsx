import React, { useState } from "react";

function CreateNote(props){

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function change(e){
        const {name, value} = e.target;
        setNote( prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })
    }

    function handleClick(e){
        e.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    return(
        <div>
            <form>
                <input onChange={change} value={note.title} type="text" name="title"  placeholder="Title" />
                <textarea onChange={change} value={note.content} name="content" placeholder="Add description" rows="4"></textarea>
                <button onClick={handleClick}>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;
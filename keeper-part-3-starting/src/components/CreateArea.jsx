import React, { useState } from "react";



function CreateArea(props) {

  const [note, setNote] = useState({title: "", content: ""})

  const addNotes = (e) => {
    props.addNewNotes(note);
    setNote({title: "", content: ""});
    e.preventDefault()
  }
  
  const saveNotes = (e) => {
    const { name, value } = e.target;
    setNote(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form onSubmit={addNotes}>
        <input name="title" value={note.title} onChange={saveNotes} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={saveNotes} placeholder="Take a note..." rows="3" />
        <button onClick={addNotes}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

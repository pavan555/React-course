import React, { useState } from "react";

function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")

  const addNote = (e) => {

    const value = newNote;
    return setNotes(prevValue => {
      setNewNote("");
      return [...prevValue, value];
    });
  }

  const addNewNote = (e) => {
    const value = e.target.value;
    return setNewNote(value);
  }

  const getNotes = () => notes.map(note => <li key={(Math.random() + 1).toString(36).substring(7)}>{note}</li>);


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input name="newNote" onChange={addNewNote} type="text" value={newNote}/>
        <button onClick={addNote}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {getNotes()}
        </ul>
      </div>
    </div>
  );
}

export default App;

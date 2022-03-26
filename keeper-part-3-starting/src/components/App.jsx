import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([])
  
  const addNotes = (note) => setNotes(prevValue => [note, ...prevValue])

  const deleteNote = (index) => setNotes(prevValue => prevValue.filter((value, idx) => idx!== index))

  const notesView = () => notes.map((note, index) => <Note key={index} index={index} title={note.title} content={note.content} deleteNote={deleteNote}/>)

  return (
    <div>
      <Header />
      <CreateArea addNewNotes={addNotes}/>
      {notesView()}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [noteArray, setNotes] = useState([]);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    fetch("/notes").
    then(response => response.json()).
    then(data => setNotes(data));
    }, []);

 

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleContentChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };


  const addNote = async () => {
    try {
      const response = await fetch("/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      const data = await response.json();
      setNotes((prevNotes) => [...prevNotes, data]);
      setNote({
        title: "",
        content: "",
      });
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };


  const deleteNote = async (id) => {
    try {
      const response = await fetch(`/notes/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        // If the deletion was successful, update the notes state
        setNotes((prevNotes) => prevNotes.filter((noteItem) => noteItem._id !== id));
      } else {
        // If there was an error, log it
        console.error("Error deleting note:", response.statusText);
      }
    } catch (error) {
      // If there was an error in the fetch request, log it
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addNote();
        }}
      >
        <input
          name="title"
          onChange={handleTitleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleContentChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {noteArray.map((noteItem) => (
          <Note
            key={noteItem._id} // Use the unique ID of the note as the key
            id={noteItem._id} // Pass the unique ID of the note to the onDelete function
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote} // Pass the deleteNote function directly
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import Note from "./Components/Note";
import axios from "axios";
import noteService from "./services/notes";
import Notification from "./Components/Notification";
import Footer from "./Components/Footer";

const App = (props) => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("A NEW NOTE");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    // axios.get("http://localhost:3001/notes").then((response) => {
    //   setNotes(response.data);
    // });
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    // console.log("clicked", event.target);
    const tempObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    // axios.post("http://localhost:3001/notes", tempObject).then((response) => {
    //   setNotes(notes.concat(response.data));
    //   setNewNote("");
    // });
    noteService.create(tempObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };
  const noteToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };

    // axios.put(url, changedNote).then((response) => {
    //   setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
    // });
    noteService
      .update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification massage={errorMessage} />
      <button onClick={() => setShowAll(!showAll)}>
        Show {showAll ? "Important" : "All"}
      </button>
      <ul>
        {noteToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;

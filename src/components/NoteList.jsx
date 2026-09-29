import React from 'react';

function NoteList({ notes, onDeleteNote, onEditNote }) {
  return (
    <div className="notes-grid">

      {notes.map((note) => (
        <div className="note-card" key={note.id}>

          <h2>{note.title}</h2>

          <p>{note.content}</p>

          <div className="button-group">
            <button
              className="edit-btn"
              onClick={() => onEditNote(note)}
            >
              Edit ✏️
            </button>

            <button
              className="delete-btn"
              onClick={() => onDeleteNote(note.id)}
            >
              Delete 🗑️
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}

export default NoteList;
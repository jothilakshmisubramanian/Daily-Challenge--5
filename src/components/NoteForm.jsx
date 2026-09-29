import React from 'react'

function NoteForm({ title, content, onTitleChange, onContentChange, onSubmit }) {
  return (
    <form className="note-form" onSubmit={onSubmit}>
      <div className="input-box">
      <input
        type='text'
        placeholder='Add title'
        value={title}
        onChange={onTitleChange}
      />

      <textarea
        placeholder='Add content'
        value={content}
        onChange={onContentChange}
      ></textarea>

      </div>
      
      <button type='submit'>Add Note</button>

    </form>
  ); 
}

export default NoteForm;
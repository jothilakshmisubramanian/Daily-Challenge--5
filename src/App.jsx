import {useState} from 'react'
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  // note state
  const [notes, setNotes] = useState([

    {
      id: 1,
      title: 'Day 1',
      content: 'To-Do List Application'
    },
    {
      id: 2,
      title: 'Day 2',
      content: 'Quote Generation Application'
    },
    {
      id: 3,
      title: 'Day 3',
      content: 'Weather Application'
    },
    {
      id: 4,
      title: 'Day 4',
      content: 'QR code Generation'
    },
  ]);

  // Input state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");

  // Title input change handler
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // content input change handler
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

// Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      return;
    }
    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content
    };
    setNotes([...notes, newNote]);
    setTitle('');
    setContent('');
  };
// Search input change handler
  const searchNotes = (e) => {
    setSearch(e.target.value);
  };

  // Delete note handler
  const deleteNote = (noteId) =>  
  { setNotes(notes.filter((note) => note.id !== noteId));
  };

  const editNote = (note) => {
  setTitle(note.title);
  setContent(note.content);
};

  // filtered notes based on search query
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='App'>
      <h1>Notes Keeping App 📌 </h1>
      
      <NoteForm
        title={title}
        content={content}
        onTitleChange={(e) => setTitle(e.target.value)}
        onContentChange={(e) => setContent(e.target.value)}
        onSubmit={handleSubmit}
      />
      <div className="search-section">
        <SearchBar search={search} onSearchChange={searchNotes} />
      </div>
      
<NoteList 
  notes={filteredNotes} 
  onDeleteNote={deleteNote} 
  onEditNote={editNote} 
/>    </div>
  );
}

export default App; 
      
import { useState } from 'react';
import { db } from '../../../db';

export function AddNoteForm() {
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [newNote, setNewNote] = useState('');
  
    async function addNote() {
      try {
        const id = await db.notes.add({
          title,
          newNote,
          date: new Date(),
        });
  
        setStatus(`New note${id} added`);
        setNewNote('');
        setTitle('');

      } catch (error) {
        setStatus(`Failed to add: ${error}`);
      }
    }
  
    return (
      <div className='container'>
        <p>{status}</p>
        Title:
        <input
          type="textarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Note:
        <input
          type="textarea"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <button onClick={addNote}>Add</button>
      </div>
    );
  }
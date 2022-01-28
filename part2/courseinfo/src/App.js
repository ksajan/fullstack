import React from 'react';
import Notes from './components/Note'

const App = (props) => {
  const {notes} = props;
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Notes key={note.id} note={note} />)}
        {/* <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li> */}
        </ul>
    </div>
  )
}

export default App;

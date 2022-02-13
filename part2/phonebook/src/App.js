import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [showName, setShowName] = useState(false)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const namesToShow = showName
  ? persons
  : persons.filter(person => person.name.toLowerCase().includes('a'))
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => 
        <Note key={person.name} note={person} />)}
      </ul>
    </div>
  )
}

export default App
import React, { useState } from 'react'
import Note from './components/Note'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [message, setMessage] = useState(null)

  // const names = persons.map(person => {
  //   return person.name.toLocaleLowerCase()
  // })

  const addPerson = (event) => {
    event.preventDefault()
    const matchNames = (person1, person2) => person1.toLocaleLowerCase() === person2.toLocaleLowerCase()
    if (persons.find((person) => matchNames(person.name, newName))){
      window.alert(`${newName} already exists in the phonebook.`)
      return
    }else {
      const replacer = (match, p1, p2) => {
        return p1.toUpperCase() + p2.toLocaleLowerCase();
      }

    const titleCasedName = newName.replace(/\b([a-zA-Z])(\w+)/g, replacer)
    const personObject = {
      name: titleCasedName,
    }
    setPersons(persons.concat(personObject))
  }
    setNewName('')
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  // const namesToShow = showName
  // ? persons
  // : persons.filter(person => person.name.toLowerCase().includes('a'))
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
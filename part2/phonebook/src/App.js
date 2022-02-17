import React, { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  // const [message, setMessage] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // const names = persons.map(person => {
  //   return person.name.toLocaleLowerCase()
  // })

  // const filterByName = persons.filter(person => {
  //   return person.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase())}) 

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
      number: newNumber,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
  }
    setNewName('')
    setNewNumber('')
    console.log('button clicked', event.target)
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  
  const namesToShow = 
  filter === ""
  ? persons
  : persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      Filter shown with 
      <input
        onChange={handleFilter}
        value={filter}
        />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {namesToShow.map(person => 
        <Note key={person.id} note={person} />)}
      </ul>
    </div>
  )
}

export default App
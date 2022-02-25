import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    const url = 'https://restcountries.com/v3.1/all'
    axios
      .get(url)
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const countriesToShow = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )


  return (
    <div>
      <h2>Countries</h2>
      <div>
        find countries: <input value={filter} onChange={handleFilterChange} />  

        <button onClick={() => setFilter('')}>show all</button>
        
        <h3>{countriesToShow.length} countries</h3>
        <ul>
          {countriesToShow.map(country =>
            <li key={country.name}>{country.name}</li>
          )}
        </ul>
        
        </div>
    </div>
  )
}

export default App;

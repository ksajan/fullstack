import React, { useState } from 'react';

const GetRandomInt = (max) => {
  console.log(max)
  return Math.floor(Math.random() * (max))
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>
      {props.text}
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  })

  const len = anecdotes.length

  const handleClick = () => {
    let index = GetRandomInt(len) //Math.floor(Math.random() * (anecdotes.length))
    while (index === selected) {
      index = GetRandomInt(len)
    }
    setSelected(index)
  }

  const handleVoteClick = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1
    })
  }
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]} />
      <Display text={`has ${votes[selected]} votes`} />
      <Button handleClick={handleClick} text={'Next anecdote'} />
      <Button handleClick={handleVoteClick} text={'Vote'} />
      {/* {anecdotes[selected]} */}
    </div>
  )
}

export default App;

// import logo from './logo.svg';
import React, { useState } from 'react';


const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
    buttions press history: {props.allClicks.join(' ')}
    </div>
  )
}

const NewButton = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App2 = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])


  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }
  return (
    <div>
      {left}
      <NewButton handleClick={handleLeftClick} text={'left'} />
      <NewButton handleClick={handleRightClick} text={'right'} />
      {/* <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button> */}
      {right}
      {/* <p>{allClicks.join("    ")}</p>
       */}
       <History allClicks={allClicks} />
    </div>
  )
}

//   return (
//     <div>
//     {left}
//     <button onClick={() => setLeft(left + 1)}>
//       left
//     </button>
//     <button onClick={() => setRight(right + 1)}>
//       right
//     </button>
//     {right}
//     </div>
//   )
// }

const NewApp = (props) => {
  const [ counter, setCounter ] = useState(0)
  const incrementCounterByOne = () => setCounter(counter + 1)
  const decrementCounterByOne = () => setCounter(counter - 1)
  const setCounterToZero = () => setCounter(0)

  return (
    <div>
    <Display counter={counter} />
    <Button handleClick={incrementCounterByOne} text="Increment" />
    <Button handleClick={decrementCounterByOne} text="Decrement" />
    <Button handleClick={setCounterToZero} text="Reset" />
    {/* <button onClick={incrementCounterByOne}>Increment</button>
    <button onClick={decrementCounterByOne}>Decrement</button>
    <button onClick={setCounterToZero}>Reset</button> */}
    </div>
  )
}

const Button = (props) => {
  console.log("clicked")
  return (
    <button onClick={props.handleClick}>
    {props.text}
    </button>
  )
}

// New version of the above Button component 
const NewButton1 = ({handleClick, text}) => <>
  <button onClick={handleClick}>
    {text}
  </button>
</>

  // const handleClick = () => {
  //   setCounter(counter + 1)
  //   console.log('clicked')
  // }
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )
  // console.log('rendering...', counter)

  // return (
  //   <div>
  //   <div>{counter}</div>
  //   <button onClick={handleClick}>Click me</button>
  //   <button onClick={() => setCounter(0)}>Reset counter</button>
  //   </div>
  // )
// }

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const NewDisplay = ({counter}) => {
  /*
  This is a destructed component of
  the Display component.
  */
  return (
    <div>{counter}</div>
  )
}

// new version o0f the above NewDisplay Function
const NewDisplay2 = ({counter}) => <>{counter}</>

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  return(
  <div>
    <Header course={course} />
    <Content part1={part1.name} part2={part2.name} part3={part3.name} exercises3={part3.exercises} exercises1={part1.exercises} exercises2={part2.exercises} />
    <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
  </div>
  )
}

const Content = (props) => {
  return(
    <div>
    {/* <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p> */}
      <Part3 part3={props.part3} exercises3={props.exercises3}/>
      <Part2 part2={props.part2} exercises2={props.exercises2}/>
      <Part1 part1={props.part1} exercises1={props.exercises1}/>
      </div>
  )
}

const Part3 = (props) => {
  return (
    <div>
      <p>{props.part3} {props.exercises3}</p>
    </div>
  )
}

const Part2 = (props) => {
  return (
    <div>
      <p>{props.part2} {props.exercises2}</p>
    </div>
  )
}

const Part1 = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercises1}</p>
    </div>
  )
}
const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of excercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}


export default App2;

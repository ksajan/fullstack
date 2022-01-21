// import logo from './logo.svg';
import React from 'react';

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


export default App;

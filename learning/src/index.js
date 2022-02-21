import ReactDOM from 'react-dom'
import App from './App.js'
import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(response => {
//   console.log(response)
//   ReactDOM.render(<App notes={response.data} />, document.getElementById('root'))
// })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)
axios.get('http://localhost:3001/notes').then(response => {
  console.log(response)
  ReactDOM.render(<App notes={response.data} />, document.getElementById('root'))
})
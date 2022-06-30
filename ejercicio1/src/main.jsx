import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => (
    <div>
    <h1>{course}</h1>
    </div>
  )

const Content = ({info}) => (
      <div>
      <p>
        {info}
      </p>
    </div>
  )

const Total = ({exercises}) => (
  <div>
    <p>Number of exercises {exercises} </p>
  </div>
  )

const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content info={<p> {part1} {exercises1} {part2} {exercises2} {part3} {exercises3} </p>} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

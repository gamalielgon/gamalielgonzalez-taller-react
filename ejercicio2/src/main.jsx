import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)
  const total = (good + neutral + bad)
  let positive = ((good * 100) / total)
  let average = ((good - bad)/total)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={incrementGood}>
        Good!
      </button>
      <button onClick={incrementNeutral}>
        Neutral
      </button>
      <button onClick={incrementBad}>
        Bad
      </button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

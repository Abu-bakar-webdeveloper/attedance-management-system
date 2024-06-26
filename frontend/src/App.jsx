import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      fetch('http://localhost:3000/api/test')
      .then(response => response.json())
      .then(data => setData(data));
  }, [])

  return (
    <>
     <div>this is for testing backend</div>
     {
      data.map((item) => (
        <div key={item.data}>
          <h2>{item.data}</h2>
          <p>{item.desc}</p>
        </div>
      ))
     }
    </>
  )
}

export default App

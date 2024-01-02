import React, { useEffect, useState } from 'react'
import './App.css';

function App(){
  const [data, setData] = useState([])
  useEffect(() =>{
fetch('http://localhost:8082/amoorders')
.then(res => res.json())
//.then(data => console.log(data))
//.then(err => console.log(err));
//Rewrite these statements to pass the data to the variable
.then(data => setData(data))
.then(err => console.log(err));;
  },[])
  return(
    <div style={{padding : "50px"}}>
      <table>
        <thead>
          <th>time</th>
          <th>Orders</th>
          <th>SOU</th>
          <th>SourceDB</th>
        </thead>
        <tbody>
          {data.map(d=> (
            <tr>
              <td>{d.time}</td>
              <td>{d.Orders}</td>
              <td>{d.SOU}</td>
              <td>{d.SourceDB}</td>
            </tr>
          ))}
        </tbody>
      
      </table>
      </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import  Plot from 'react-plotly.js';

import './App.css';
import './index.css';


function App_bkp(){
    const [data, setData] = useState([])
      useEffect(() =>{
      fetch('http://localhost:8082/maoorders')
      .then(res => res.json())
      //.then(data => console.log(data))
      //.then(err => console.log(err));
      //Rewrite these statements to pass the data to the variable
      .then(data => setData(data))
      .then(err => console.log(err));
        }, [])
        return(
         <div className='App'>
            <Plot data={[{
              x:[10,20,33], y:[33,44,55],
                type: 'bar',
                mode: 'lines+markers',
                marker: {color: 'red'}
            }]}
          //  layout={{width:30, height:40, title:'sample bar graph '}}
            />

            </div>
        )
  }
  
  export default App_bkp;
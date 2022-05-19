import React from "react"
import {Bar,Pie,Line} from 'react-chartjs-3'

const BarChart = () => {
  
  return (<>
    <div className="chart">
    <Bar data={ {
      labels : ['expenses' , 'income' , 'balance' ],
      datasets: [{
          label: 'Amounts',
          data: [200, 800, 600],
         // backgroundColor: 'green'
          backgroundColor: [ 'red', 'green', 'blue'],
          borderWidth: 2
      },
      ],
  } } 
  height={330} width={300} options={{
        maintainAspectRatio: false
    }}/>
  </div>
  </>)
}

export default BarChart

import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';


export  default class Donut extends Component{
  
  render(){
    return(
      <div className="donut-position">
       <DonutChart
    data={[{
        
        value:  this.props.data
    },
     
    {
        
        value: 100-this.props.data,
        isEmpty: true  
    },
    ]}
     />
      </div>
    )
  }
}


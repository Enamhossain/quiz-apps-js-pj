import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'
const Statistics = () => {
 const [data,setData] = useState([])
 

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
     .then(datas =>{
      const cheart = datas.data.data
     cheart.map(quiz =>setData(quiz.total) )
           
     
   });
    // handle success
 },[])
   
 
  return (
   
    <LineChart width={500} height={400} data={data}>
    <XAxis dataKey="total"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <Tooltip></Tooltip>
  
  </LineChart>
    
  );
}



export default Statistics;
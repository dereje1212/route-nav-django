
// export default function About() {
//   return <h1><a href="https://www.w3schools.com">Read About Django!!</a></h1>


import React,{useEffect, useState} from 'react'
// import './styles.css';
import axios from 'axios';
function About() {
  const[data,setData]=useState([])
  const[studfname,setstudfname]=useState()
  const[studlname,setstudlname]=useState()
  const[studgrade,setstudgrade]=useState()

 const postdata=(id)=>{
   axios.post(`http://127.0.0.1:8000/student/studDetail/${id}`,{
    
    studfname:studfname,
    studlname:studlname,
    studgrade:studgrade,
   }).then((response)=>
    setData(response.data)
   )

 }


 const fetchdata=()=>{
  // console.log(name)
  axios.get(`http://127.0.0.1:8000/api/studList`).then((Response)=>
   setData(Response.data)
  )
 }
 useEffect(()=>{fetchdata()},[])
 const handlechangeStudFName=(e)=>{
  setstudfname(e.target.value)
   
 }
 const handlechangeStudLName=(e)=>{
  setstudlname(e.target.value)
   
 }
 const handlechangeStudGrade=(e)=>{
  setstudgrade(e.target.value)

 }
 const deleteStu=(id,e)=>{
     axios.delete(`http://127.0.0.1:8000/api/studDelete/${id}`).then((response)=>
       {{alert('Are U ready to delete!!!')}fetchdata()}
     )
 
 }
  return (
    <div className="App">
      <h1><u><i>View Student List</i></u></h1>
    {data.map((value)=>{
       return <div ><p> Studfname: {value.stufname}</p>
                   <p> Studlname: {value.stulname}</p>
                   <p>studgrade:{value.stugrade}</p>
                   

                   <button onClick={()=>deleteStu(value.id)}>delete</button>
                   
            </div>
    }
   )}

    </div>
  );
}
export default About;
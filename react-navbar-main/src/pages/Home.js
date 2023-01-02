// export default function Home() {
//   return <h1>Home</h1>
// }

import React,{useEffect, useState} from 'react'
// import './styles.css';
import axios from 'axios';
function Home() {
  const[data,setData]=useState([])
  const[Efname,setEfname]=useState()
  const[Elname,setElname]=useState()
  const[Esarlary,setEsalary]=useState()
  const[EphonNo,setEphonNo]=useState()

 const postdata=(id)=>{
   axios.post(`http://127.0.0.1:8000/api/EmployeeList'/${id}`,{
    
    Efname:Efname,
    studlname:Elname,
    Esarlary:Esarlary,
    EphonNo:EphonNo,
   }).then((response)=>
    setData(response.data)
   )

 }


 const fetchdata=()=>{
  // console.log(name)
  axios.get(`http://127.0.0.1:8000/api/EmployeeList`).then((Response)=>
   setData(Response.data)
  )
 }
 useEffect(()=>{fetchdata()},[])
 const handlechangeEFName=(e)=>{
  setEfname(e.target.value)
   
 }
 const handlechangeELName=(e)=>{
  setElname(e.target.value)
   
 }
 const handlechangeEsalary=(e)=>{
  setEsalary(e.target.value)

 }
 const handlechangeEphonNo=(e)=>{
  setEphonNo(e.target.value)

 }
 const deleteE=(id,e)=>{
     axios.delete(`http://127.0.0.1:8000/api/EmployeeDelete/${id}`).then((response)=>
       {{alert('Are U ready to delete!!!')}fetchdata()}
     )
 
 }
  return (
    <div className="App">
      <h1><u><i>View Employee List</i></u></h1>
    {data.map((value)=>{
       return <div ><p> Efname: {value.Efname}</p>
                   <p> Elname: {value.Elname}</p>
                    <p>Esalary: {value.Esalary}</p>
                   <p>EphonNo: {value.EphonNo}</p> 

                   <button onClick={()=>deleteE(value.id)}>delete</button>
                   
            </div>
    }
   )}

    </div>
  );
}
export default Home;
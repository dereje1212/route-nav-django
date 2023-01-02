// export default function contact() {
//   return <h1>+251934941260</h1>
// }

import React,{useEffect, useState} from 'react'
// import './styles.css';
import axios from 'axios';
function Contact() {
  const[data,setData]=useState([])
  const[Tfname,setTfname]=useState()
  const[Tlname,setTlname]=useState()
  const[Tsalary,setTsalary]=useState()

 const postdata=(id)=>{
   axios.post(`http://127.0.0.1:8000/api/studDetail/${id}`,{
    
   Tfname:Tfname,
    Tlname:Tlname,
    Tsalary:Tsalary,
   }).then((response)=>
    setData(response.data)
   )

 }


 const fetchdata=()=>{
  // console.log(name)
  axios.get(`http://127.0.0.1:8000/api/TeacherList`).then((Response)=>
   setData(Response.data)
  )
 }
 useEffect(()=>{fetchdata()},[])
 const handlechangeTFName=(e)=>{
  setTfname(e.target.value)
   
 }
 const handlechangeTLName=(e)=>{
  setTlname(e.target.value)
   
 }
 const handlechangeTsalary=(e)=>{
  setTsalary(e.target.value)

 }
 const deleteTeach=(id,e)=>{
     axios.delete(`http://127.0.0.1:8000/api/TeacherDelete/${id}`).then((response)=>
       {{alert('Are U ready to delete!!!')}fetchdata()}
     )
 
 }
  return (
    <div className="App">
      <h1><u><i>View Teachers List</i></u></h1>
    {data.map((value)=>{
       return <div ><p> Tfname: {value.Tfname}</p>
                   <p> Tlname: {value.Tlname}</p>
                   <p>Tsalary: {value.Tsalary}</p>

                   <button onClick={()=>deleteTeach(value.id)}>delete</button>
                   
            </div>
    }
   )}

    </div>
  );
}
export default Contact;
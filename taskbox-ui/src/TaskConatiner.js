import React,{useState,useEffect} from 'react'
import axios from 'axios'

import TaskList from './TaskList'
import Addtask from './Addtask'


const TaskContiner=(props)=>{
 const [tasks,setTask]=useState([])

 useEffect(()=>{
     axios.get('http://localhost:3033/api/tasks')
     .then((Response)=>{
         const result=Response.data
        setTask(result)
         console.log(result)
         
        })//sucess
        
     .catch((err)=>{
         console.log(err)
       alert(err.message)
     }) //error
 },[tasks])

 const addtask=(task)=>{
   setTask([ task, ...tasks])
 }

 const remove=(id)=>{
     const result=tasks.filter((task)=>{
         return task.id !=id
     })
  setTask(result)
 }

 const edititem=(task)=>{
     const result=tasks.map((t)=>{
         if(t.id===task.id){
             return {...t,...task}
         }else {
             return {...t}
         }
     })
     setTask(result)

 }

    return(
        <div>
        <Addtask addtask={addtask}/>
        <TaskList 
        tasks={tasks}
        remove={remove}
        edititem={edititem}/>
        
        
        
        </div>
    )
}
export default TaskContiner
import React, {useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'


const Addtask=(props)=>{
    const {addtask}=props
    
    const [isSaved,setisSaved]=useState(false)

    const formsubmit=(task)=>{
       
       axios.post('http://localhost:3033/api/tasks',task)
       .then((Response)=>{
          const result=Response.data
          console.log(result)
          addtask(result)
          setisSaved(true)
       })//sucess
       .catch((error)=>{
           const err=error.message
           alert(err)
       })//fails
    }

    const toggleIsSaved=()=>{

    }

    return(

        <div>
            <div id={'title'} >
           <h2 >Add task</h2>
          <div>
           <TaskForm 
           formsubmit={formsubmit}
           isSaved={isSaved}
           toggleIsSaved={toggleIsSaved}/>
           </div>
            </div>
        </div>
    )
}
export default Addtask
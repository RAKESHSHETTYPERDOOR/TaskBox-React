import React from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const EditTask=(props)=>{
    const {id,title,status,edititem,handletoggle}=props

    const formsubmit=(task)=>{
     axios.put(` http://localhost:3033/api/tasks/${task.id}`,task)
     .then((Response)=>{
         const result=Response.data
         edititem(result)
         handletoggle(false)

     })
     .catch((error)=>[
       alert(error.message)
     ])

    }


    return(
        <div id={'form1'}>
         <div >
          <TaskForm
          id={id}
          title={title}
          status={status}
          formsubmit={formsubmit}/>
        </div> 

        </div>
    )
}
export default EditTask
import React, { useState,useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'

const TaskForm=(props)=>{
 const {formsubmit,isSaved,toggleIsSaved,id:sIno,title:tasktitle,status:taskstatus}=props

  const [id,setid]=useState(sIno ?sIno : uuidv4())
  const [title,setTitle]=useState(tasktitle? tasktitle:'')
  const [status,setStatus]=useState(taskstatus? taskstatus: false)

  useEffect(()=>{
      console.log('issaved',isSaved)
      if(isSaved){
          setid(uuidv4())
          setTitle('')
          setStatus(false)
          toggleIsSaved()
      }
  },[isSaved])
  
  const handlechange=(e)=>{
      setTitle(e.target.value)
  }

  const handlestatuschange=(e)=>{
      setStatus(e.target.checked)
  }

  const handlesubmit=(e)=>{
   e.preventDefault()
   const formdata={
       id:id,
       title:title,
       status:status
   }
   console.log(formdata)
  formsubmit(formdata)
  }

    return(
        <div >
          <div >  

            <form onSubmit={handlesubmit} >
                <label>Title</label> <br/>
                <input 
                type="text" 
                value={title} 
                class="form-label"
                onChange={handlechange}/> <br/>
                <input 
                type="checkbox" 
                checked={status}
                class="form-label"
                onChange={handlestatuschange}/>  <label>Completed</label><br/>

                <input type="submit" value="save" class="form-label"/>
            </form>
          </div>  

        </div>
    )
}
export default TaskForm
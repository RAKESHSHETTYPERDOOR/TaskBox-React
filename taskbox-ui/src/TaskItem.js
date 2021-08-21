import React,{useState} from 'react'
import axios from 'axios'
import EditTask from './EditTask'


const TaskItem=(props)=>{
 const {title,id,status,remove,edititem}=props 

 const [toggle,settoggle]=useState(false)
 
 const handle=()=>{
   const confirmremove=window.confirm('Are you sure?')
   if(confirmremove){
      axios.delete(` http://localhost:3033/api/tasks/${id}`)
      .then((Response)=>{
       const result=Response.data
       console.log(result)
       remove(result.id)
      })
      .catch((error)=>{
          alert(error.message)
      })
   }

 }
    
 const handletoggle=()=>{
     settoggle(!toggle)
 }

    return(
        <div>
            {
                toggle ? 
                <div>
                <EditTask
                id={id}
                title={title}
                status={status}
                edititem={edititem}
                handletoggle={handletoggle}
                />
                <button onClick={handletoggle}>cancel</button>
                </div>
                :
                (
                    <div>
                        <h1>{title}</h1> 
                        <button onClick={handle}>Remove</button>
                        <button onClick={handletoggle}>Edit</button>
                     </div>   
                )
            }
       
        </div>
    )
}
export default TaskItem
import React from 'react'
import TaskItem from './TaskItem'

const TaskList=(props)=>{
  const {tasks,remove,edititem}=props

    return (
        <div>
         {
         tasks.length===0
         ?
        <div>
        <h2>No task found</h2>
        <p>Add ur first task</p>
        </div>
           :
           <div>
           <h2>Task-{tasks.length}</h2>
           {
               tasks.map((task)=>{
                return   <TaskItem
                   key={task.id}
                   {...task}
                   remove={remove}
                   edititem={edititem}
                   />
               })
           }
           </div>
           }
        </div>
    )
}
export default TaskList
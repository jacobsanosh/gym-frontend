import React,{useState} from "react";
import { complete_workout } from "../../api";
import './WorkoutRow.css'
function WorkoutRow({item}) {
  const date  =new Date(item.date)
  const [completed, setCompleted] = useState(item.completed)
   const  completedWork=async(id)=>{
    setCompleted(!completed)
   try{
    await complete_workout(id)
    
   }
   catch(error){
    setCompleted(!completed)
   }
   
}
  if(completed)
  {
    return ""
  }
  else{
    return (
  
      <tr >
        <td>{item.name}</td>
        <td>{item.part_of_body}</td>
        <td>{item.description}</td>
        <td>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</td>
        <td>{item.sets}</td>
        <td>{item.reps}</td>
        <td>
          <input
            type="checkbox"
            id="work"
            name="done"
            checked={completed}
            onChange={() => {
              completedWork(item.id);
            }}
          />
        </td>
      </tr>
    );
  }
  
}

export default WorkoutRow;

import { useId, useState } from "react";
import cls from './AddTaskInput.module.css'





function AddTaskInput(props: {categoryName: string, dispatch: React.Dispatch<{ type: 'ADD TASK', payload: { nameCategory: string, id: string, text: string }}>}) {
    const [newTaskName, setNewTaskName] = useState<string>('')
    const taskId = useId()

    const addTask = () => {
        const newId: string = Math.random() + taskId
        props.dispatch({type: 'ADD TASK', payload: {id: newId, text: newTaskName, nameCategory: props.categoryName} })
        setNewTaskName('')
    }
    

    return ( 
    <div className={cls.container}>
        <input type="text" placeholder="text for new task" value={newTaskName} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTaskName(e.target.value)}/>
        <button onClick={addTask}>add task</button>
    </div> 
    );
}

export default AddTaskInput;
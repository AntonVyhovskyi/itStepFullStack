import { useState, type FunctionComponent } from "react";
import type { ISkill } from "./ContainerUpdateSkills";
import cls from './UpdateSkills.module.css'
import {  FiTrash2 } from "react-icons/fi";

interface UpdateSkillsProps {
    skills: ISkill[],
    addSkill: (n: string) => void,
    deleteSkill: (n:number) => void
}

const UpdateSkills: FunctionComponent<UpdateSkillsProps> = ({ skills, addSkill,  deleteSkill}) => {
    const [input, setinput] = useState<string>('');
    return (
        <div className={cls.container}>
            <div className={cls.addNew}>
                <input type="text" value={input} onChange={(e) => { setinput(e.target.value) }} />
                <button className={cls.buttonAdd} onClick={() => {
                    if (input) { 
                        addSkill(input) 
                        setinput('')
                    }

                }}>Add</button>
            </div>

            {skills.map(el => <div key={el.id}>
                {el.name}
                <button className={cls.buttonDelete} onClick={()=>{deleteSkill(el.id)}}><FiTrash2 color="black"/></button>
            </div>)}
        </div>
    );
}

export default UpdateSkills;
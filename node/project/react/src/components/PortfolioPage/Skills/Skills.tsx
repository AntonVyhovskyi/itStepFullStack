import type { FunctionComponent } from 'react';
import cls from './Skills.module.css'
import type { ISkill } from '../../Dashboard/UpdatePortfolio/UpdateSkills/ContainerUpdateSkills';

interface SkillsProps {
    skills: ISkill[]
}
 
const Skills: FunctionComponent<SkillsProps> = ({skills}) => {
    return ( 
        <div className={cls.container}>
            {skills.map(el=>{
                return (
                    <div key={el.id} className={cls.item}>
                        {el.name}
                    </div>
                )
            })}
        </div>
     );
}
 
export default Skills;
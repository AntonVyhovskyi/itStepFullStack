import { useEffect, useState, type FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../api/axios";
import UpdateSkills from "./UpdateSkills";

interface ContainerUpdateSkillsProps {

}

export interface ISkill {
    "id": number,
    "name": string
}

const ContainerUpdateSkills: FunctionComponent<ContainerUpdateSkillsProps> = () => {

    const { id } = useParams();

    const [skills, setskills] = useState<ISkill[]>([]);

    const fetchSkills = () => {
        api.get<ISkill[]>(`/skill/getByPortfolioId/${id}`).then(res=>{
            setskills(res.data)
        })
    }

    useEffect(() => {
        fetchSkills()
    }, []);


    const addSkill = (skillName: string) => {
        api.post(`skill/addSkill/${id}`, {skillName}).then(()=>{
            fetchSkills()
        })
    }

    const deleteSkill = (skill_id: number) => {
        api.delete(`/skill/deleteFromPortfolio/${id}`, {data: {skill_id}}).then(()=>{
            fetchSkills()
        }).catch((e)=>{
            console.log(e);
            
            alert('No success delete')
        })
    }
    return (
        <>
        {skills ? <UpdateSkills skills={skills} addSkill={addSkill} deleteSkill={deleteSkill}/> : <div>loading...</div>}
        </>
    );
}

export default ContainerUpdateSkills;
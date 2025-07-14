import { useEffect, useState, type FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../api/axios";
import UpdateBasicInfo from "./UpdateBasicInfo";
import nullsToEmpty from "../../../../utils/helpers/nullsToEmpty";

export interface IBasicInfo {
    id: number,
    user_id: number,
    first_name: string,
    last_name?: string,
    middle_name?: string,
    title: string,
    description: string,
    created_at: string,
    updated_at: string,
    email: string,
    phone: string,
    linkedin: string,
    github: string,
    telegram: string,
    viber: string,
    watsup: string,
    image_url: string
}

interface ContaierComponentUpdateBasicInfoProps {

}

const ContaierComponentUpdateBasicInfo: FunctionComponent<ContaierComponentUpdateBasicInfoProps> = () => {
    const { id } = useParams()
    const [basicInfo, setbasicInfo] = useState<IBasicInfo>();

    const fetchBasicInfo = () => {
        api.get<IBasicInfo>(`/portfolio/${id}`).then(res => {
            const cleanData = nullsToEmpty(res.data) as IBasicInfo;
            setbasicInfo(cleanData)
        })
    }
    useEffect(() => { fetchBasicInfo() }, [])
    const handleUpdate = async (updatedData: IBasicInfo) => {
        try {
            await api.put(`/portfolio/updatePortfolio/${updatedData.id}`, updatedData);
            alert('Оновлено!');
        } catch (error) {
            alert('error')
        }

    };


    return (
        <>
            {basicInfo ? <UpdateBasicInfo initialData={basicInfo} handleUpdate={handleUpdate} /> : <div>loading...</div>}
        </>
    );
}

export default ContaierComponentUpdateBasicInfo;
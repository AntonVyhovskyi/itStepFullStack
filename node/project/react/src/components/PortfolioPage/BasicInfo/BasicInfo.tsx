import type { FunctionComponent } from 'react';
import cls from './BasicInfo.module.css'
import type { IBasicInfo } from '../../Dashboard/UpdatePortfolio/UpdateBasicInfo/ContaierComponentUpdateBasicInfo';
import noPhoto from '../../../assets/images/noImg.bmp'

interface BasicInfoProps {
    basicInfo: IBasicInfo
}

const BasicInfo: FunctionComponent<BasicInfoProps> = ({ basicInfo }) => {

    const { first_name, last_name, middle_name, title, description, image_url } = basicInfo
    return (
        <div className={cls.container}>
            <div className={cls.text}>
                <div className={cls.name}>{first_name} {last_name && last_name} {middle_name && middle_name}</div>
                <div className={cls.title}>{title}</div>
                <div className={cls.description}>{description}</div>
            </div>
            <div className={cls.photo}>
                <img src={image_url ? image_url : noPhoto} alt="" />
            </div>

        </div>
    );
}

export default BasicInfo;
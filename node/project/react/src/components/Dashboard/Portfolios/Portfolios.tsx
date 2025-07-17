import { useState, type FunctionComponent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { IPortfolio } from "../Dashboard";
import cls from './Portfolios.module.css'
import noImage from '../../../assets/images/noImg.bmp'
import api from "../../../api/axios";

interface PortfoliosProps {

}

interface IContext {
    portfolios: IPortfolio[],
    fetchPortfolios: () => void
}
const Portfolios: FunctionComponent<PortfoliosProps> = () => {
    const [deletePortfolio, setdeletePortfolio] = useState<number>(0);

    const navigate = useNavigate()

    const { portfolios, fetchPortfolios } = useOutletContext<IContext>()

    const deletePortfolioFetch = (v: number) => {
        api.delete(`/portfolio/${v}`).then(res => {
            fetchPortfolios()
            setdeletePortfolio(0)
        })
    }

    return (
        <div className={cls.container}>
            <button className={cls.addPortfolio} onClick={() => { navigate('./createNew') }}>Add Portfolio</button>
            {portfolios && portfolios.map(el => {
                return (
                    <div className={cls.item} key={el.id}>
                        <div className={cls.name}>{el.first_name} {el.last_name}</div>
                        <div className={cls.last_name}>{el.title}</div>
                        <div className={cls.image}><img src={el.image_url ? el.image_url : noImage} alt="" /></div>
                        <button className={cls.buttonUpdate} onClick={() => { navigate(`./update/${el.id}`) }}>Update</button>
                        <button className={cls.buttonWeb} onClick={() => { window.open(`/portfolioPage/${el.id}`, '_blank') }}>Web Page</button>
                        <button className={`${cls.buttonWeb} ${cls.buttonDelete}`} onClick={() => { setdeletePortfolio(el.id) }}>Delete</button>
                    </div>
                )
            })}
            {deletePortfolio !== 0
                &&
                <div className={cls.deleteModalWindowContainer}>
                    <div className={cls.deleteModalWindow}>
                        <div className={cls.deleteModalWindowText}>Are you sure?</div>
                        <div className={cls.deleteModalWindowButtons}>
                            <button onClick={() => { setdeletePortfolio(0) }}>Cancel</button>
                            <button onClick={() => { deletePortfolioFetch(deletePortfolio) }}>Delete</button>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
}

export default Portfolios;
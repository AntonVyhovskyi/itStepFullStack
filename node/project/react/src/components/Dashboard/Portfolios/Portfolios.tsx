import { type FunctionComponent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import type { IPortfolio } from "../Dashboard";
import cls from './Portfolios.module.css'
import noImage from '../../../assets/images/noImg.bmp'

interface PortfoliosProps {
    
}

interface IContext {
    portfolios: IPortfolio[]
}
const Portfolios: FunctionComponent<PortfoliosProps> = () => {

    const navigate = useNavigate()

    const {portfolios} = useOutletContext<IContext>()
   
   
    
    return ( 
        <div className={cls.container}>
            <button className={cls.addPortfolio} onClick={()=>{navigate('./createNew')}}>Add Portfolio</button>
            {portfolios && portfolios.map(el=>{
                return (
                    <div className={cls.item} key={el.id}>
                        <div className={cls.name}>{el.first_name} {el.last_name}</div>
                        <div className={cls.last_name}>{el.title}</div>
                        <div className={cls.image}><img src={el.image_url ? el.image_url : noImage} alt="" /></div>
                        <button className={cls.buttonUpdate}>Update</button>
                        <button className={cls.buttonWeb}>Web Page</button>


                    </div>
                )
            })}
            
        </div>
     );
}
 
export default Portfolios;
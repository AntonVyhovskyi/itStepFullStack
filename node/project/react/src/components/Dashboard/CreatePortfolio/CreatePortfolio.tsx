import type { FunctionComponent } from 'react';
import cls from './CreatePortfoio.module.css'
import { useFormik } from 'formik';


interface CreatePortfolioProps {
    
}
 
const CreatePortfolio: FunctionComponent<CreatePortfolioProps> = () => {


    const formik = useFormik({
        initialValues: {
        
        },
        onSubmit: ()=>{}

    })

    return ( 
        <div>

        </div>
     );
}
 
export default CreatePortfolio;
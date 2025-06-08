import type { FunctionComponent } from 'react';
import cls from './CreateRequest.module.css';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/hooks';
import axios from 'axios';

interface CreateRequestProps {

}

interface IFormValues {
    email: string;
    master_id: string;
    customer: string;
    description: string;
}

const CreateRequest: FunctionComponent<CreateRequestProps> = () => {

    const navigate = useNavigate()

    const { masterId } = useParams()

    const masters = useAppSelector(s => s.masters.masters)

    const email = useAppSelector(s => s.user.email)



    return (
        <div className={cls.container}>
            <Formik<IFormValues>
                initialValues={{ email: email || '', master_id: masterId || '', customer: '', description: '' }}

                onSubmit={(values, { setSubmitting }) => {
                    debugger
                    axios.post('http://localhost:3000/requests/createNewRequest', { ...values }).then(res => {
                        navigate('/requests')
                        
                    }).finally(()=>{
                        setSubmitting(false);
                    })

                }}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <div className={cls.inputText}>
                            <label htmlFor="customer">Прізвище Ім'я</label>
                            <Field type="text" name="customer" />
                            <ErrorMessage name="customer" component="div" />
                        </div>
                        <div className={cls.inputText}>
                            <label htmlFor="email">Емейл</label>
                            <Field type="email" name="email" disabled />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div className={cls.inputOptions}>
                            <label htmlFor="category">Майстер</label>
                            <Field as="select" name="master_id">
                                <option value="">Оберіть майстра</option>
                                {masters.map((master) => (
                                    <option key={master.id} value={master.id}>
                                        {master.name} ({master.category})
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div className={cls.inputTextarea}>
                            <label htmlFor="description">Опишіть проблему</label>
                            <Field as="textarea" name="description" />
                            <ErrorMessage name="description" component="div" />
                        </div>

                        <button type="submit"  disabled={isSubmitting} className={cls.submitButton}>
                            {isSubmitting ? 'Відправляємо...' : 'Надіслати запит'}
                        </button>
                    </Form>
                )}


            </Formik>
        </div>
    );
}

export default CreateRequest;

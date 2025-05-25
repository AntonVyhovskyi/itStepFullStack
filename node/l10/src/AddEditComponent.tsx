import { type FunctionComponent } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import cls from './AddEditComponent.module.css'
import axios from "axios";
import { number, object, string } from "yup";


interface AddEditProps {
    type: 'add' | 'edit',
    id?: number,
    title?: string,
    author?: string,
    year?: number,
    rating?: number
    apiURL: string,
    setEditNow?: (a: null) => void,
    fetchbooks: () => void
    setAddNow?: (v: false) => void

}

const AddEdit: FunctionComponent<AddEditProps> = ({
    type,
    id,
    title = '',
    author = '',
    year = 0,
    rating = 0,
    apiURL,
    setEditNow,
    fetchbooks,
    setAddNow }) => {
    const validationSchema = object({
        title: string().max(50),
        author: string().max(50),
        year: number().min(0).max(2025),
        rating: number().max(10).min(0)
    })

    const handleSubmit = async (values: any) => {
        try {
            if (type === 'edit' && id !== undefined) {
                await axios.put(`${apiURL}books/${id}`, values);
                setEditNow?.(null);
            } else {
                await axios.post(`${apiURL}books`, values);
                setAddNow?.(false);
            }
            fetchbooks();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={cls.container}>
            <div className={cls.modal}>
                <Formik
                    initialValues={{
                        title,
                        author,
                        year,
                        rating
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                    enableReinitialize
                >
                   <Form className={cls.form}>
                        <label className={cls.label}>Назва
                            <Field name="title" type="text" className={cls.input} />
                            <ErrorMessage name="title" component="div" className={cls.error} />
                        </label>

                        <label className={cls.label}>Автор
                            <Field name="author" type="text" className={cls.input} />
                            <ErrorMessage name="author" component="div" className={cls.error} />
                        </label>

                        <label className={cls.label}>Рік
                            <Field name="year" type="number" className={cls.input} />
                            <ErrorMessage name="year" component="div" className={cls.error} />
                        </label>

                        <label className={cls.label}>Оцінка
                            <Field name="rating" type="number" step="0.1" className={cls.input} />
                            <ErrorMessage name="rating" component="div" className={cls.error} />
                        </label>

                        <div className={cls.buttons}>
                            <button type="submit" className={cls.submitBtn}>
                                {type === 'add' ? 'Додати' : 'Зберегти'}
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>


        </div>
    );
}

export default AddEdit;
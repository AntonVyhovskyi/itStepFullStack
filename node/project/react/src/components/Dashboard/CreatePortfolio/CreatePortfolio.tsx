import { useState, type FunctionComponent } from 'react';
import cls from './CreatePortfoio.module.css'
import { useFormik } from 'formik';
import { uploadToImgBB } from '../../../utils/uploadToImgBB';

import * as Yup from 'yup';

import api from '../../../api/axios';
import { useNavigate } from 'react-router-dom';

const phoneRegExp = /^\+?[0-9]{10,15}$/;

const validationSchema = Yup.object({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    middle_name: Yup.string(),
    title: Yup.string().required('Title is required'),
    description: Yup.string().max(1000, 'Too long').required('Discription name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
        .matches(phoneRegExp, 'Invalid phone number')
        .required('Phone is required'),
    linkedin: Yup.string().url('Invalid LinkedIn URL'),
    github: Yup.string().url('Invalid GitHub URL'),
    telegram: Yup.string().url('Invalid Telegram URL'),
    viber: Yup.string().matches(phoneRegExp, 'Invalid Viber number'),
    watsup: Yup.string().matches(phoneRegExp, 'Invalid WhatsApp number'),
    image_url: Yup.string().url('Invalid image URL'),
});


interface CreatePortfolioProps {

}

const CreatePortfolio: FunctionComponent<CreatePortfolioProps> = () => {



    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            middle_name: '',
            title: '',
            description: '',
            email: '',
            phone: '',
            linkedin: '',
            github: '',
            telegram: '',
            viber: '',
            watsup: '',
            image_url: ''
        },
        validationSchema,
        onSubmit: (values) => {
            api.post('/portfolio/createPortfolio', { ...values }).then(res => {
                alert('The portfolio has been successfully created. You can continue editing) Good luck in your job search!')
                navigate(`/dashboard/update/${res.data.id}/skills`)

            }).catch(err => {
                console.log(err);

            })
        }

    })


    const renderError = (field: keyof typeof formik.errors) => {
        const touched = formik.touched[field];
        const error = formik.errors[field];
        return touched && error ? (
            <div className={cls.error}>{error}</div>
        ) : null;
    };

    const renderField = (field: keyof typeof formik.errors, fildLabel: string, type: 'text' | 'password' | 'tel' | 'email', readOnly = false) => {
        return (
            <div className={cls.field}>
                <label htmlFor={field} className={cls.label}>{fildLabel}</label>
                <input
                    id={field}
                    type={type}
                    {...formik.getFieldProps(field)}
                    className={cls.input}
                    readOnly={readOnly ? true : false}
                />
                {renderError(field)}
            </div>
        )
    }

    const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file));
        setLoading(true);

        try {
            const url = await uploadToImgBB(file);
            formik.setFieldValue('image_url', url);
        } catch (err) {
            alert('Не вдалося завантажити зображення');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cls.container}>
            <form onSubmit={formik.handleSubmit} className={cls.form}>
                {renderField('first_name', 'First name*', 'text')}
                {renderField('last_name', 'Last name*', 'text')}
                {renderField('middle_name', 'Middle name', 'text')}
                {renderField('title', 'Title*', 'text')}
                {renderField('description', 'Description*', 'text')}
                {renderField('email', 'Email*', 'email')}
                {renderField('phone', 'Phone*', 'tel')}
                {renderField('linkedin', 'LinkedIn (url)', 'text')}
                {renderField('github', 'GitHub (url)', 'text')}
                {renderField('telegram', 'Telegram (url)', 'text')}
                {renderField('viber', 'Viber (phone +12...)', 'text')}
                {renderField('watsup', 'WhatsApp (phone +12...)', 'text')}

                <div className={cls.field}>
                    <label className={cls.label}>Photo</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        className={cls.inputFile}
                    />

                    {loading && <div className={cls.loader}>Uploading...</div>}

                    {preview && (
                        <img src={preview} alt="preview" className={cls.preview} />
                    )}

                    {renderError('image_url')}
                </div>
                {renderField('image_url', 'image url', 'text', true)}
                <button className={cls.button}>next</button>
            </form>
        </div>
    );
}

export default CreatePortfolio;
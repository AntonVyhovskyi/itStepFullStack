import { useState, type FunctionComponent } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import cls from './UpdateBasicInfo.module.css'
import { uploadToImgBB } from "../../../../utils/uploadToImgBB";
import type { IBasicInfo } from "./ContaierComponentUpdateBasicInfo";

interface UpdateBasicInfoProps {
    initialData: IBasicInfo,
    handleUpdate: (val: IBasicInfo) => void
}

const phoneRegExp = /^\+?[0-9]{10,15}$/;

const UpdateBasicInfo: FunctionComponent<UpdateBasicInfoProps> = (props) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    const formik = useFormik({
        initialValues: props.initialData,
        validationSchema: Yup.object({
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
        }),
        onSubmit: (values) => {
            props.handleUpdate(values)
        },
    })

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
                {[
                    { name: 'first_name', type: 'text', placeholder: 'Name*' },
                    { name: 'last_name', type: 'text', placeholder: 'Second Name*' },
                    { name: 'middle_name', type: 'text', placeholder: 'Middle name' },
                    { name: 'title', type: 'text', placeholder: 'Title*' },
                    { name: 'email', type: 'email', placeholder: 'Email*' },
                    { name: 'phone', type: 'text', placeholder: 'Phone number*' },
                    { name: 'linkedin', type: 'text', placeholder: 'LinkedIn' },
                    { name: 'github', type: 'text', placeholder: 'GitHub' },
                    { name: 'telegram', type: 'text', placeholder: 'Telegram' },
                    { name: 'viber', type: 'text', placeholder: 'Viber' },
                    { name: 'watsup', type: 'text', placeholder: 'WhatsApp' },
                    { name: 'image_url', type: 'text', placeholder: 'URL photo' },
                ].map(({ name, type, placeholder }) => (
                    <div key={name} className={cls.field}>
                        <label htmlFor={name} className={cls.label}>{placeholder}</label>
                        <input
                            name={name}
                            type={type}
                            value={(formik.values as any)[name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={cls.input}
                            {...(name === 'image_url' ? { readOnly: true } : {})}
                        />
                        {formik.touched[name as keyof IBasicInfo] && formik.errors[name as keyof IBasicInfo] && (
                            <div className={cls.error}>{formik.errors[name as keyof IBasicInfo]}</div>
                        )}
                    </div>
                ))}
                <div className={cls.field}>
                     <label htmlFor='description' className={cls.label}>Description</label>
                    <textarea
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={cls.textarea}
                        
                    />
                    {formik.touched.description && formik.errors.description && (
                        <div className={cls.error}>{formik.errors.description}</div>
                    )}
                </div>

                <div className={cls.field}>
                    <label className={cls.label}>Download photo</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImage}
                        className={cls.inputFile}
                    />

                    {loading && <div className={cls.loader}>Завантаження...</div>}

                    {(preview || formik.values.image_url) && (
                        <img
                            src={preview || formik.values.image_url}
                            alt="preview"
                            className={cls.preview}
                        />
                    )}

                    {formik.errors.image_url && (
                        <div className={cls.error}>{formik.errors.image_url}</div>
                    )}
                </div>

                <button type="submit" className={cls.button}>
                    Зберегти
                </button>
            </form>
        </div >
    );
}

export default UpdateBasicInfo;
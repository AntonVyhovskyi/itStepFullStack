import { useState, type FunctionComponent } from 'react';
import cls from './CreatePortfoio.module.css'
import { useFormik } from 'formik';
import { uploadToImgBB } from '../../../utils/uploadToImgBB';


interface CreatePortfolioProps {

}

const CreatePortfolio: FunctionComponent<CreatePortfolioProps> = () => {

    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


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
        onSubmit: () => { }

    })


    const renderError = (field: keyof typeof formik.errors) => {
        const touched = formik.touched[field];
        const error = formik.errors[field];
        return touched && error ? (
            <div className={cls.error}>{error}</div>
        ) : null;
    };

    const renderField = (field: keyof typeof formik.errors, fildLabel: string, type: 'text' | 'password' | 'tel' | 'email') => {
        return (
            <div className={cls.field}>
                <label htmlFor={field} className={cls.label}>{fildLabel}</label>
                <input
                    id={field}
                    type={type}
                    {...formik.getFieldProps(field)}
                    className={cls.input}
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
                {renderField('first_name', 'First name', 'text')}
                {renderField('last_name', 'Last name', 'text')}
                {renderField('middle_name', 'Middle name', 'text')}
                {renderField('title', 'Title', 'text')}
                {renderField('description', 'Description', 'text')}
                {renderField('email', 'Email', 'email')}
                {renderField('phone', 'Phone', 'tel')}
                {renderField('linkedin', 'LinkedIn', 'text')}
                {renderField('github', 'GitHub', 'text')}
                {renderField('telegram', 'Telegram', 'text')}
                {renderField('viber', 'Viber', 'text')}
                {renderField('watsup', 'WhatsApp', 'text')}
               
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
            </form>
        </div>
    );
}

export default CreatePortfolio;
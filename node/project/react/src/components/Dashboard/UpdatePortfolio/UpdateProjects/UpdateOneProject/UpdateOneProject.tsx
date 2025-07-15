import { useEffect, useState, type FunctionComponent } from "react";
import type { IProject } from "../ContainerUpdateProjects";
import * as Yup from 'yup';
import { useFormik } from "formik";
import cls from './UpdateOneProject.module.css'
import { uploadToImgBB } from "../../../../../utils/uploadToImgBB";

interface UpdateOnePortfolioProps {
    projectInfo: IProject,
    updateProjectFetch: (v: Omit<IProject, 'id' | 'created_at' | 'portfolio_id'>) => void
}

const UpdateOnePortfolio: FunctionComponent<UpdateOnePortfolioProps> = ({ projectInfo, updateProjectFetch }) => {
    const [preview, setPreview] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setPreview(null);
    }, [projectInfo.id]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: projectInfo.title,
            description: projectInfo.description,
            image_url: projectInfo.image_url,
            github_url: projectInfo.github_url,
            live_url: projectInfo.live_url
        },
        validationSchema: Yup.object({
            title: Yup.string().max(50).required('Title is required'),
            description: Yup.string().min(10).max(1000, 'Too long').required('Discription name is required'),
            image_url: Yup.string().url('Invalid image URL'),
            github_url: Yup.string().url('Invalid image URL'),
            live_url: Yup.string().url('Invalid image URL')
        }),
        onSubmit: (values) => {

            updateProjectFetch(values)

        }
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
        <form className={cls.form} onSubmit={formik.handleSubmit}>
            {
                [
                    { name: 'title', type: 'text', placeholder: 'Title*' },
                    { name: 'github_url', type: 'text', placeholder: 'Github url' },
                    { name: 'live_url', type: 'text', placeholder: 'Live url' },
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
                        {formik.touched[name as keyof typeof formik.touched] &&
                            formik.errors[name as keyof typeof formik.errors] && (
                                <div className={cls.error}>
                                    {formik.errors[name as keyof typeof formik.errors]}
                                </div>
                            )}
                    </div>
                ))
            }
            <div className={cls.field}>
                <label htmlFor='description' className={cls.label}>Description*</label>
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
                Update
            </button>
        </form>
    );
}

export default UpdateOnePortfolio;

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { boolean, object, string } from 'yup';
import { correctnEvent } from '../../state/slices/events.slice';
import cls from '../NewEvent/NewEvent.module.css'



function CorrectEvent() {


    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    const { id } = useParams()

    const eventDate = useAppSelector(state => {
        return state.events.events.find(el => {

            return el.id === id
        })
    })
    console.log(eventDate);


    const initilalValuesSchemaWithoutYupObject: Record<keyof EventInterface, any> = {
        id: string().required(),
        title: string().required().max(50),
        description: string().notRequired().max(300, 'max 300 symbols'),
        date: string().required()
    }

    const initilalValuesSchemaWithYupObject = object(initilalValuesSchemaWithoutYupObject)

    const initialValues = { ...eventDate }


    return (
        <div className={cls.fullBlurContainer}>
            <div className={cls.container}>
                <div className={cls.top}>
                    <div className={cls.topTitle}>Correct event</div>
                    <button
                        onClick={() => { navigate('..') }}
                        className={cls.topGoBackButton}>close</button>

                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={initilalValuesSchemaWithYupObject}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(correctnEvent(values))
                        navigate('..')
                    }}
                >
                    <Form className={cls.form}>
                        <div>
                            <Field placeholder=" " type="text" name="title" />
                            <ErrorMessage name='title' >
                            {msg => <div className="text-red-600 italic text-xs">{msg}</div>}
                            </ErrorMessage>
                            <label htmlFor="title">Event</label>
                        </div>
                        <div>
                            <Field className={cls.textarea} placeholder=" " as="textarea" name="description" />
                            <ErrorMessage name='description'>
                            {msg => <div className="text-red-600 italic text-xs">{msg}</div>}
                            </ErrorMessage>
                            <label htmlFor="description">Discription</label>
                        </div>
                        <button className={cls.formSubmitButton} type="submit">Submit</button>

                    </Form>
                </Formik>
            </div>


        </div>
    );
}

export default CorrectEvent;
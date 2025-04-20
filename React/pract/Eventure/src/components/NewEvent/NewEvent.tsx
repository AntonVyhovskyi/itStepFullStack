import { useNavigate, useOutletContext } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup'
import { EventInterface } from "../../interfacesAndTypes";
import { v4 as uuid } from 'uuid'
import { ContextType } from "../Day/Day";
import { useAppDispatch } from "../../hooks/hooks";
import { addEvent } from "../../state/slices/events.slice";
import cls from './NewEvent.module.css'




function NewEvent() {

    const dispatch = useAppDispatch()

    const { currentMonth, nowDateForTitle } = useOutletContext<ContextType>()

    const initilalValuesSchemaWithoutYupObject: Record<keyof EventInterface, any> = {
        id: string().required(),
        title: string().required().max(50),
        description: string().notRequired().max(300, 'max 300 symbols'),
        date: string().required()
    }

    const initilalValuesSchemaWithYupObject = object(initilalValuesSchemaWithoutYupObject)

    const initialValues: EventInterface = {
        id: uuid(),
        title: '',
        description: '',
        date: currentMonth.format()
    }



    const navigate = useNavigate()
    return (
        <div className={cls.fullBlurContainer}>
            <div className={cls.container}>
                <div className={cls.top}>
                    <div className={cls.topTitle}>Create event for {nowDateForTitle}</div>
                    <button
                        onClick={() => { navigate('..') }}
                        className={cls.topGoBackButton}>close</button>

                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={initilalValuesSchemaWithYupObject}
                    onSubmit={(values, { setSubmitting }) => {
                        dispatch(addEvent(values))
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
                            <Field className={cls.textarea} placeholder=" "  as="textarea" name="description" />
                            <ErrorMessage name='description'>
                            {msg => <div className="text-red-600 italic text-xs">{msg}</div>}
                            </ErrorMessage>
                            <label htmlFor="description">Discription</label>
                        </div>
                        <button className={cls.formSubmitButton}  type="submit">Submit</button>

                    </Form>
                </Formik>
            </div>


        </div>
    );
}

export default NewEvent;
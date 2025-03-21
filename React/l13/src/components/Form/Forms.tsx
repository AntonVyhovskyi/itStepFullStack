import React, { Children, useState } from "react";
import cls from "./Forms.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegistrationFormData } from "../../typesAndInterfaces";
import { object, string, ref } from "yup";


const Forms = () => {
    const initialValuesForRegistration: RegistrationFormData = {
        fName: '',
        lName: '',
        birthDay: '',
        login: '',
        eMail: '',
        pass1: '',
        pass2: ''
    }

    const validationSchema = object({
        fName: string().min(2).max(13).required(),
        lName: string().min(2).max(13).required(),
        birthDay: string().required("Коли народився?"),
        login: string().min(2).max(13).required(),
        eMail: string().email().required(),
        pass1: string().min(8).max(24).required(),
        pass2: string().min(8).max(24).oneOf([ref('pass1')]).required()
    })

    return <div className={cls.container}>
        <Formik<RegistrationFormData> initialValues={initialValuesForRegistration}
            validationSchema={validationSchema}
            onSubmit={() => { }}
        >
            <Form className={cls.form}>

            <div className={cls.input}>
                    <Field id="fName" name='fName' placeholder=''/>
                    <label htmlFor="fName">Ім'я</label>
                    <ErrorMessage name="fName"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="lName" name='lName' placeholder=''/>
                    <label htmlFor="lName">Прізвище</label>
                    <ErrorMessage name="lName"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="birthDay" type='date' name='birthDay' placeholder=''/>
                    <label htmlFor="birthDay">Дата народження</label>
                    <ErrorMessage name="birthDay"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="login" name='login' placeholder=''/>
                    <label htmlFor="login">Логін</label>
                    <ErrorMessage name="login"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="eMail" type='email' name='eMail' placeholder=''/>
                    <label htmlFor="eMail">Електронна пошта</label>
                    <ErrorMessage name="eMail"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="pass1" type='password' name='pass1' placeholder=''/>
                    <label htmlFor="pass1">Пароль</label>
                    <ErrorMessage name="pass1"  component="div" className="error"/>
                </div>

                <div className={cls.input}>
                    <Field id="pass2" type='password' name='pass2' placeholder=''/>
                    <label htmlFor="pass2">Підтвердження пароля</label>
                    <ErrorMessage name="pass2"  component="div" className="error"/>
                </div>
                <button type="submit">
                    Го го го!
                </button>
            </Form>
        </Formik>
    </div>;
};

export default Forms;

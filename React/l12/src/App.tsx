import { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './App.css'
import { number, object, string } from 'yup';

const formSchema = object({
  name: string().required().max(12).min(3),
  pass: string().required().max(14).min(8),
  pass2: string().required().max(14).min(8),
  date: string().required(),
  sex: string().required('are you man or woman???'),
  age: number().integer().positive().max(115),
  discription: string().required().max(100).min(3)
})
type FormData = yup.InferType<typeof formSchema>;

function App() {


  const [formData, setFormData] = useState<FormData>({
    name: '',
    pass: '',
    pass2: '',
    date: '',
    sex: '',
    age: '',
    discription: ''

  })
  useEffect(() => {
    console.log(formData);
  }, [formData])



  return (
    <>
      <Formik initialValues={formData} onSubmit={(v, { resetForm }) => {

        console.log(v);

        // setFormData({...v})
        resetForm()
      }}
        validationSchema={formSchema}
        enableReinitialize

      >

        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Field type='text' name='name' placeholder='name' />
            <ErrorMessage name='name' />
            <Field type='password' name='pass' placeholder='pass' />
            <ErrorMessage name='pass' />
            <Field type='password' name='pass2' placeholder='pass2' />
            <ErrorMessage name='pass2' />
            <label >
              gaburtsdatum
              <br />
              <Field type='date' name='date' />
              <ErrorMessage name='date' />
            </label>

            <div>
              <label>
                <Field type='radio' name='sex' value='man' />

                man
              </label>
              <label>
                <Field type='radio' name='sex' value='woman' />
                woman
              </label>
              <ErrorMessage name='sex' />

            </div>
            <Field type='number' name='age' placeholder='age' />
            <ErrorMessage name='age' />
            <Field as='textarea' name='discription' placeholder='discription' />
            <ErrorMessage name='discription' />
            <button type='submit' disabled={isSubmitting}>Submit</button>
          </Form>
        )}

      </Formik>
    </>
  )
}

export default App

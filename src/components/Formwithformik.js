import React, { Component } from 'react'
// import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import * as Yup from 'yup'

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}



const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required')
})
function YoutubeForm() {

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     validationSchema
    // })

    // console.log('Form values', formik.values)
    // console.log('Form errors', formik.errors)
    // console.log('visited fields', formik.touched)
    return (
        // <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {/* <form onSubmit={formik.handleSubmit}> */}
            {/* <Form onSubmit={formik.handleSubmit}> */}
            <Form>
                <div className='form-control'>
                    <h1>Handle form with Formik</h1>
                    <label htmlFor='name'>Name</label>
                    {/* <input */}
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.name} 
                    // {...formik.getFieldProps('name')}
                    />
                    {/* {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null} */}
                    <ErrorMessage name='name' />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    {/* <input */}
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    //  onChange={formik.handleChange} 
                    //  onBlur={formik.handleBlur} 
                    //  value={formik.values.email}
                    // {...formik.getFieldProps('email')}
                    />
                    {/* {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null} */}
                    <ErrorMessage name='email' />
                </div>


                <div className='form-control'>
                    <label htmlFor='channel'>Channel</label>
                    {/* <input */}
                    <Field
                        type='text'
                        id='channel'
                        name='channel'
                    // onChange={formik.handleChange} 
                    // onBlur={formik.handleBlur} 
                    // value={formik.values.channel} 
                    // {...formik.getFieldProps('channel')}
                    />
                    {/* {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null} */}
                    <ErrorMessage name='channel' />
                </div>
                <button type="submit">Submit</button>
                {/* </form> */}
            </Form>
            {/* </div> */}
        </Formik>
    )
}
export default YoutubeForm
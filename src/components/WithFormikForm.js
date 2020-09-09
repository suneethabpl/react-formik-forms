import React from 'react';
import { Formik, withFormik } from 'formik'
import * as Yup from 'yup';

export const WithFormikForm = (props) => {
    const {
        values,
        isSubmitting,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;
    return (
        <div className='form-control'>
            <h1>handle form with withFormik</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                />
                {errors.name && touched.name && <div id="feedback">{errors.name}</div>}
                <button disabled={isSubmitting} type="submit">Submit</button>
            </form>
        </div>
    )
}
const Form = withFormik({
    mapPropsToValues: () => ({}),
    validate: values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required'
        }
        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    }
})(WithFormikForm);

export default Form;
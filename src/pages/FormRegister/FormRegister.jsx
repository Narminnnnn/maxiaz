import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FormRegister.css';

const RegisterForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        birthDay: Yup.number().min(1, 'Invalid day').max(31, 'Invalid day').required('Day is required'),
        birthMonth: Yup.number().min(1, 'Invalid month').max(12, 'Invalid month').required('Month is required'),
        birthYear: Yup.number().min(1900, 'Invalid year').max(new Date().getFullYear(), 'Invalid year').required('Year is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const initialValues = {
        firstName: '',
        lastName: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const onSubmit = (values) => {
        console.log('Form data', values);
        let personDetails = JSON.parse(localStorage.getItem("PersonData"));
        localStorage.setItem("PersonData", JSON.stringify(values))
    };

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <div className="containerForm">
                <Form>
                    <h1 className='qeydiyyat'>Qeydiyyatdan Kecin</h1>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" id="firstName" name="firstName" />
                        <ErrorMessage name="firstName" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" id="lastName" name="lastName" />
                        <ErrorMessage name="lastName" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="birthDay">Birth Day</label>
                        <Field type="number" id="birthDay" name="birthDay" />
                        <ErrorMessage name="birthDay" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="birthMonth">Birth Month</label>
                        <Field type="number" id="birthMonth" name="birthMonth" />
                        <ErrorMessage name="birthMonth" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="birthYear">Birth Year</label>
                        <Field type="number" id="birthYear" name="birthYear" />
                        <ErrorMessage name="birthYear" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" />
                        <ErrorMessage name="confirmPassword" component="div" className="error" />
                    </div>

                    <button className='registerButton' type="submit">Register</button>
                </Form>
            </div>
        </Formik>
    );
};

export default RegisterForm;
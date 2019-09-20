import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

export default function UserForm({onSubmit}) {
    const initialUserForm = {
        name: '',
        email: '',
        password: ''
    };

    const validationSchema = yup.object().shape({
        name: yup.string()
        .min(2, 'Your name is too short!')
        .max(50, 'You have a longer name than we can handle!')
        .required('Kindly input your name'),
        email: yup.string()
        .email('Invalid email')
        .required('This field is required'),
        password: yup.string()
        .min(7, 'Add more characters to your password')
        .max(20, 'You probably won\'t be able to remember this. Password length should be from 7-20 characters!')
        .required('We need your password'),
        serviceterms: yup.bool()
        .test(
            'serviceterms',
            'You have to agree with our Terms and Conditions!',
            value => value === true
        )
        .required(
            'You have to agree with our Terms and Conditions!'
        ),
    });
    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialUserForm}
            onSubmit={onSubmit}
            render={props => {
                
                return (
                    <Form>
                        <div>
                            <label>
                                Name
                                <Field name='name' type='text' placeholder='Name' />
                                <ErrorMessage name='name' component='div' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Email
                                <Field name='email' type='text' placeholder='Email' />
                                <ErrorMessage name='email' component='div' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password
                                <Field name='password' type='current-password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </label>
                        </div>
                        <div>
                            <label>
                                I have read and agree to the terms of service.
                                <Field name='serviceterms' type='checkbox' />
                                <ErrorMessage name='serviceterms' component='div' />
                            </label>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                );
            }}
        />
    );
}
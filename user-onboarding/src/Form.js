import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function UserForm() {
    return (
        <Formik
            render={props => {
                const {validationSchema} = props;
                return (
                    <Form>
                        <div validateSchema={validationSchema}>
                            <label>
                                Name
                                <Field name='name' type='text' placeholder='Name' />
                                <ErrorMessage name='name' component='div' />
                            </label>
                        </div>
                        <div>
                            <label>
                                Password
                                <Field name='password' type='text' placeholder='Password' />
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
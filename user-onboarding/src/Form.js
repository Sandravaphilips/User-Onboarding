import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Form() {
    return (
        <Formik
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
                                Password
                                <Field name='password' type='text' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </label>
                        </div>
                        <div>
                            <label>
                                I have read and agree to the terms of service.
                                <Field name='service-terms' type='checkbox' />
                                <ErrorMessage name='service-terms' component='div' />
                            </label>
                        </div>
                        <button type='submit'>Submit</button>
                    </Form>
                );
            }}
        />
    );
}
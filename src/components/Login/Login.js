import React from "react";
import auth from '../../auth';
import { history } from './history'
import { Formik } from "formik";
import * as Yup from "yup";
import './Login.css'

const Login = () => (
    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                //console.log("Logging in", values);
                setSubmitting(false)
                auth.login(values.email, () => {
                    history.push("/table")
                })
            }, 500);
        }}

        // Using Yum for validation
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email()
                .required("Required"),
            password: Yup.string()
                .required("No password provided.")
                .min(6, "Password should be 6 chars minimum.")
                .matches(/(?=.*[0-9])/, "Password must contain a number.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;

            return (
                <div className='log'>
                    <h2>Login Form</h2>
                    <h3>Welcome! Please log in...</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete='off'
                            className={errors.email && touched.email && "error"}
                        />
                        {errors.email && touched.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}
                        <label htmlFor="email">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.password && touched.password && "error"}
                        />
                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}
                        <button className='login' type="submit" disabled={isSubmitting}
                        >Login
                        </button>
                    </form>
                </div>
            );
        }}
    </Formik>
);

export default Login;

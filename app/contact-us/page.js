"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {validationRules} from "@/util/validationRules";

const ContactUsPage = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isFormSubmitted, setIsFormSubmitted] = useState();
    const validateForm = (values) => {
        let formErrors = {};

        if (!validationRules.isNotEmpty(values.name)) {
            formErrors.name = 'Name is required';
        }

        if (!validationRules.isNotEmpty(values.email)) {
            formErrors.email = 'Email is required';
        } else if (!validationRules.isEmail(values.email)) {
            formErrors.email = 'Incorrect email address format';
        }

        if (!validationRules.isNotEmpty(values.message)) {
            formErrors.message = 'Message is required';
        } else if (!validationRules.hasMinLength(values.message, 30)) {
            formErrors.message = 'Message should be at least 30 characters long';
        }

        return formErrors;
    };

    const handleBlur = (e) => {
        const {name, value} = e.target;
        const newErrors = validateForm({...formValues, [name]: value});

        setErrors((prevErrors) => ({
            ...prevErrors, [name]: newErrors[name],
        }));
    };

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formValues);

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length !== 0) {
            return;
        }

        try {
            const response = await fetch("/api/contact-us", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.ok) {
                e.target.reset();
                setIsFormSubmitted({
                    status: true,
                    message: 'Form was submitted successfully!'
                });

                setTimeout(() => {router.push("/")}, 2000);
            } else {
                setIsFormSubmitted({
                    status: false,
                    message: 'Form submission failed!'
                });
            }
        } catch (error) {
            console.error(error);
            setIsFormSubmitted({
                status: false,
                message: 'Form submission failed!'
            });
        }
    };

    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Questions?
                <span className="orange_gradient text-center capitalize"> - Contact Us</span>
            </h1>
            <p className='desc text-center'>
               In case of any questions, please fill out the form, and our managers will get in touch with you as soon as possible.
            </p>
            {isFormSubmitted &&
                <div className={`p-3 border mb-4 rounded ${isFormSubmitted.status ? 'border-green-600' : 'border-red-600'}`}>
                    {isFormSubmitted.status ? <span>&#10004;</span> : <span>&#10008;</span>}
                    <span className="ml-3">{isFormSubmitted.message}</span>
                </div>}
            <form className="max-w-xl w-full"
                  onSubmit={handleFormSubmit}
                  style={isFormSubmitted && isFormSubmitted.status ? {display: 'none'} : null }>
                <div className="mb-5">
                    <label className="block text-sm mb-1" htmlFor="name">Enter your name</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formValues.name}
                        className={`field ${errors.name ? 'invalid' : ''}`}/>
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="mb-5">
                    <label className="block text-sm mb-1" htmlFor="email">Enter your email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formValues.email}
                        className={`field ${errors.email ? 'invalid' : ''}`}/>
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className="mb-5">
                    <label className="block text-sm mb-1" htmlFor="message">Add your question</label>
                    <textarea
                        name="message"
                        id="message"
                        cols="50"
                        rows="10"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={formValues.message}
                        className={`field resize-none ${errors.message ? 'invalid' : ''}`} />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div className="text-right">
                    <button type="submit" className="black_btn">Send A Message</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUsPage;
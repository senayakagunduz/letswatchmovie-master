'use client'
import * as Yup from "yup";
import { useFormik } from "formik";
import React, { useState } from 'react'
import axios from "axios";
import Swal from "sweetalert2";


const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [contactInfos, setContactInfos] = useState([])

    const initialValues = {
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    }
    const validationSchema = Yup.object({
        name: Yup.string().required("Adınızı giriniz"),
        email: Yup.string()
            .email("Enter a valid email")
            .required("Email is required"),
        subject: Yup.string().required("Lütfen konuyu seçiniz"),
        phone: Yup.string().required("Geçerli bir telefon numarası giriniz"),
        message: Yup.string().required("Mesajınızı giriniz")
    })
    const onSubmit = async (values) => {
        setLoading(true);
        try {
            const resp = await axios.post(`https://648a1a565fa58521cab0d0a4.mockapi.io/contact`, values);
            setTimeout(() => {
                setLoading(false);
            }, 2000)
            console.log("resp", resp)
            setContactInfos(resp.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Mesajınız gönderildi",
                showConfirmButton: false,
                timer: 1500
              });
            
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
    })
    return (
        <>
            <div className='min-w-60 p-5 flex-col justify-center items-center'>
                <div className='flex-col flex-1 justify-center py-2'>
                    <h1 className='text-slate-100 text-xl block text-center font-semibold hover:text-yellow-400'>Bizimle iletişime geçin</h1>
                    <hr className='mt-2 text-white font-light' />
                </div>
                <form noValidate onSubmit={formik.handleSubmit}>
                    <div className='mt-3 flex flex-col flex-1'>
                        <label className='flex text-lg text-slate-100'>Ad-Soyad:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            {...formik.getFieldProps("name")}
                            className={`mt-1 p-2 ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md`}
                            placeholder='name'

                        />
                    </div>
                    <div className='mt-3 flex flex-col flex-1'>
                        <label htmlFor="email" className='flex text-lg text-slate-100 '>Email:&nbsp;&nbsp;</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            {...formik.getFieldProps("email")}
                            data-isvalid={formik.touched.email && !formik.errors.email}
                            isinvalid={formik.touched.email && !!formik.errors.email}
                            className={`mt-1 p-2 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md`}
                            placeholder='email'
                        />
                    </div>
                    <div className='mt-3 flex flex-col flex-1'>
                        <label htmlFor="subject" className='flex text-lg text-slate-100'>Konu:&nbsp;&nbsp;</label>
                        <select
                            type='text'
                            name='subject'
                            {...formik.getFieldProps("subject")}
                            data-isvalid={formik.touched.subject && !formik.errors.subject}
                            isinvalid={formik.touched.subject && !!formik.errors.subject}
                            className={`select select-bordered flex flex-1 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md`}>
                            <option value={"info"}>Bilgi</option>
                            <option value={"cong"}>Tebrik</option>
                            <option value={"thanks"}>Teşekkür</option>
                            <option value={"complaint"}>Şikayet</option>
                        </select>
                    </div>
                    <div className='mt-3 flex flex-col flex-1'>
                        <label htmlFor="phone" className='flex  text-lg text-slate-100 '>Telefon:&nbsp;&nbsp;</label>
                        <input
                            type="number"
                            placeholder='phone'
                            id="phone"
                            name="phone"
                            {...formik.getFieldProps("phone")}
                            data-isvalid={formik.touched.phone && !formik.errors.phone}
                            isinvalid={formik.touched.phone && !!formik.errors.phone}
                            className={`mt-1 p-2 ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md`}
                        />
                    </div>
                    <div className='mt-3 flex flex-col flex-1'>
                        <label htmlFor="message" className='flex text-lg text-slate-100'>Mesaj:&nbsp;&nbsp;</label>
                        <textarea
                            type="text"
                            placeholder='message'
                            id="message"
                            name="message"
                            {...formik.getFieldProps("message")}
                            data-isvalid={formik.touched.message && !formik.errors.message}
                            isInvalid={formik.touched.message && !!formik.errors.message}
                            className={`mt-1 p-2 ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border rounded-md`}
                        />
                    </div>
                    <div className='mt-5'>
                        {formik.isSubmitting ? (
                            <span className="loading loading-dots loading-lg text-yellow-400"></span>
                        ) : (
                            <button
                                type="submit"
                                className='border-2 border-yellow-400 bg-yellow-400 rounded-lg text-black px-5 py-2 text-md font-semibold hover:bg-transparent hover:text-yellow-400'>
                                Gönder
                            </button>
                        )}

                    </div>
                </form >
            </div>
        </>

    )
}

export default ContactForm
{/* {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>} */ }

// const dto = {
//     name: values.name,
//     email: values.email,
//     subject: values.subject,
//     phone: values.phone,
//     message: values.message,
// }

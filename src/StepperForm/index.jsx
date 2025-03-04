import React, { useState } from 'react'
import { useStepperFormStore } from '../store'
import clsx from 'clsx'
import s from './style.module.scss'

const StepperForm = () => {
    const [formStep, setFormStep] = useState(0)
    const data = useStepperFormStore((state) => state.formStepData)
    const AddFormStepData = useStepperFormStore((state) => state.addFormStepData)
    const [form, setForm] = useState({
        name: '',
        surname: '',
        prof: '',
        about: '',
        tel: '',
    })
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    console.log(formStep)

    console.log(data)


    return (
        <div className={s.form}>
            {
                formStep === 3 ? null : <ul className='flex justify-center items-center  gap-10 mb-10'>
                    <li>
                        <button className={clsx("w-10 h-10 rounded-full ", formStep === 0 ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-500")}>1</button>
                    </li>
                    <li>
                        <button className={clsx("w-10 h-10 rounded-full ", formStep === 1 ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-500")}>2</button>
                    </li>
                    <li>
                        <button className={clsx("w-10 h-10 rounded-full ", formStep === 2 ? "bg-blue-500 text-white" : "bg-blue-50 text-blue-500")}>3</button>
                    </li>
                </ul>
            }
            {
                formStep == 0 && <form className='max-w-3xl p-4 mx-auto'>
                    <div>
                        <h1 className={s.head}>Business Structure</h1>
                        <p className={s.desc}>DigiRoad collects this information to better 
                            <br />
                            understand and serve your business.
                        </p>
                    </div>
                
                   <div className='flex gap-3'> 
                    <div>
                    <label
                    className='text-[#404D61]'
                     htmlFor="name"> Business address</label>
                   <input
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        className={s.inputs}
                        name='name' placeholder='enter the name' />
                    </div>
                        <div>
                        <label
                         className='text-[#404D61]'
                         htmlFor="surname">Type</label>
                    <input
                        onChange={handleChange}
                        value={form.surname}
                        className={s.inputs}
                        type="text" name='surname' placeholder='enter the surname' />
                        </div>
                   </div>
                   <div className='flex gap-3'> 
                    <div>
                    <label
                    className='text-[#404D61]'
                     htmlFor="name">Address</label>
                   <input
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        className={s.inputs}
                        name='name' placeholder='enter the name' />
                    </div>
                        <div>
                      
                    <input
                        onChange={handleChange}
                        value={form.surname}
                        className={s.inputs}
                        type="text" name='surname' placeholder='enter the surname' />
                        </div>
                        {/* <div>
                        <input
                        onChange={handleChange}
                        value={form.surname}
                        className={s.inputs}
                        type="text" name='surname' placeholder='enter the surname' />
                         <input
                        onChange={handleChange}
                        value={form.surname}
                        className={s.inputs}
                        type="text" name='surname' placeholder='enter the surname' />

                        </div> */}
                   </div>
                    <button
                    className='bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl'
                        onClick={() => {
                            AddFormStepData(form)
                            setFormStep(1)
                        }}
                    >Continue</button>
                </form>
            }
            {
                formStep === 1 && <form className='max-w-3xl border p-4 mx-auto rounded-md'>
                    <input
                        value={form.prof}
                        onChange={handleChange} className='w-full border p-2 rounded-md mb-2' type="text" name='prof' placeholder='enter the prof' />
                    <input
                        value={form.about}
                        onChange={handleChange} className='w-full border p-2 rounded-md mb-2' type="text" name='about' placeholder='enter the about' />

                    <button
                    className='bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl'
                        onClick={() => {
                            AddFormStepData(form)
                            setFormStep(2)
                        }}
                    >Continue</button>
                </form>
            }
            {
                formStep === 2 && <form

                    className='max-w-3xl border p-4 mx-auto rounded-md'>
                    <input
                        value={form.tel}
                        onChange={handleChange} className='w-full border p-2 rounded-md mb-2' type="text" name='tel' placeholder='enter the tel' />
                    <input
                        value={form.email}
                        onChange={handleChange} className='w-full border p-2 rounded-md mb-2' type="email" name='email' placeholder='enter the email' />
                    <button
                        className='bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl'
                        type='submit'
                        onClick={() => {
                            AddFormStepData(form)
                            setFormStep(3)
                        }}
                    >Continue</button>
                </form>


            }
            {
                formStep === 3 && <div className='max-w-2xl w-full mx-auto border border-blue-100 p-4 rounded-md'>
                    <h2 className='text-2xl font-bold'>Melumatin Duzgunluyunu yolxayin</h2>
                    <ul>
                        <li className='flex items-center gap-2'>
                            NAME:
                            <p>{data.name}</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            SURNAME:
                            <p>{data.surname}</p>

                        </li>
                        <li className='flex items-center gap-2'>
                            PROF:
                            <p>{data.prof}</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            ABOUT:
                            <p>{data.about}</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            TEL:
                            <p>{data.tel}</p>
                        </li>
                        <li className='flex items-center gap-2'>
                            EMAIL:
                            <p>{data.email}</p>
                        </li>
                        <button
                            className='bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-md'
                            onClick={handleSubmit}>Submit</button>


                    </ul>
                </div>
            }
        </div >
    )
}

export default StepperForm
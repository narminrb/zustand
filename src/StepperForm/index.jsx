import React, { useEffect, useState } from 'react'
import {  useStepperFormStore } from '../store'
import clsx from 'clsx'
import s from './style.module.scss'

const StepperForm = () => {
    //const [formStep, setFormStep] = useState(0)
    const storedStep = localStorage.getItem('formStep');
    const initialStep = storedStep ? parseInt(storedStep) : 0;
    const [formStep, setFormStep] = useState(initialStep);
    // const data = useStepperFormStore((state) => state.formStepData)
    // const AddFormStepData = useStepperFormStore((state) => state.addFormStepData)

    const formStepData = useStepperFormStore((state) => state.formStepData);
    const addFormStepData = useStepperFormStore((state) => state.addFormStepData);
    const [form, setForm] = useState({
        name: '',
        surname: '',
        address: '',
        prof: '',
        city:'',
        email: '',
        state:'',
        registration:'',
        phone: '',
        zip:'',
        country:'',
        address2:'',
        about: '',
        tel: '',
    })

    useEffect(() => {
        localStorage.setItem('formStep', formStep);
      }, [formStep]);
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [showData, setShowData] = useState(false); 
    // const handleSubmit = (e) => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: "POST",
    //         body: JSON.stringify(formStepData),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }
    console.log(formStep)

    
      const prevStep = () => {
        setFormStep(prevStep => prevStep - 1);
      };




    return (
        <div className={s.form}>
            {formStep === 3 ? null : (
        <ul className="flex justify-center items-center gap-10 mb-10">
          <li>
            <button
              className={clsx(
                'w-10 h-10 rounded-full',
                formStep === 0 ? 'bg-[#4A3AFF] text-white' : 'bg-[#EFF0F6] text-[#6F6C90]'
              )}
              onClick={() => setFormStep(0)}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'w-10 h-10 rounded-full',
                formStep === 1 ? 'bg-[#4A3AFF] text-white' : 'bg-[#EFF0F6] text-[#6F6C90]'
              )}
              onClick={() => setFormStep(1)}
            >
              2
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'w-10 h-10 rounded-full',
                formStep === 2 ? 'bg-[#4A3AFF] text-white' : 'bg-[#EFF0F6] text-[#6F6C90]'
              )}
              onClick={() => setFormStep(2)}
            >
              3
            </button>
          </li>
          <li>
            <button
              className={clsx(
                'w-10 h-10 rounded-full',
                formStep === 3 ? 'bg-[#4A3AFF] text-white' : 'bg-[#EFF0F6] text-[#6F6C90]'
              )}
              onClick={() => setFormStep(3)}
            >
              4
            </button>
          </li>
        </ul>
      )}
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
                    <div className='w-full'>
                    <label
                    className='text-[#404D61]'
                     htmlFor="name"> Business information</label>
                   <input
                        onChange={handleChange}
                        value={form.name}
                        type="text"
                        className={s.inputs}
                        name='name' placeholder='enter the name' />
                    </div>
                        <div className='w-full'>
                        <label
                         className='text-[#404D61]'
                         htmlFor="surname">Surname</label>
                    <input
                        onChange={handleChange}
                        value={form.surname}
                        className={s.inputs}
                        type="text" name='surname' placeholder='enter the surname' />
                        </div>
                   </div>
                        <div
                        className='text-[#404D61] mt-6'
                        >
                            Address
                        </div>
                   <div className='flex gap-3 '> 
                    <div className='w-full'>
                   <input
                        onChange={handleChange}
                        value={form.address}
                        type="text"
                        className={s.inputs}
                        name='address' placeholder='Address line 1' />
                    </div>
                        <div className='w-full'>
                      
                    <input
                        onChange={handleChange}
                        value={form.address2}
                        className={s.inputs}
                        type="text" name='address2' placeholder='Address line 1' />
                        </div>
                   </div>
                   <div className='flex gap-3 mt-4 mb-4'> 
                    <div className='w-full'>
                   <input
                        onChange={handleChange}
                        value={form.city}
                        type="text"
                        className={s.inputs}
                        name='city' placeholder='City' />
                    </div>
                        <div className='w-full'>
                      
                    <input
                        onChange={handleChange}
                        value={form.zip}
                        className={s.inputs}
                        type="text" name='zip' placeholder='Zip' />
                        </div>
                   </div>
                   <button
                        className="bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl"
                        onClick={(e) => {
                        e.preventDefault(); 
                        addFormStepData(form); 
                        setFormStep(1);
                        }}
                    >
                        Continue
                    </button>
                </form>
            }
            {
                formStep === 1 && <form className='max-w-3xl p-4 mx-auto'>
                <div>
                  <h1 className={s.head}>Business Details</h1>
                  <p className={s.desc}>Provide details to help us understand your business better.</p>
                </div>
                <div className='flex gap-3'>
                  <div className='w-full'>
                    <label className='text-[#404D61]' htmlFor='registration'>Registration Number</label>
                    <input onChange={handleChange} value={form.registration} type='text' className={s.inputs} name='registration' placeholder='Enter registration number' />
                  </div>
                  <div className='w-full'>
                    <label className='text-[#404D61]' htmlFor='industry'>Industry Type</label>
                    <input onChange={handleChange} value={form.industry} className={s.inputs} type='text' name='industry' placeholder='Enter industry type' />
                  </div>
                </div>
                <div className='text-[#404D61] mt-6'>Location</div>
                <div className='flex gap-3 mt-4 mb-4'>
                  <div className='w-full'>
                    <input onChange={handleChange} value={form.country} type='text' className={s.inputs} name='country' placeholder='Country' />
                  </div>
                  <div className='w-full'>
                    <input onChange={handleChange} value={form.state} className={s.inputs} type='text' name='state' placeholder='State/Province' />
                  </div>
                </div>
                <button
            className="bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl"
            onClick={(e) => {
              e.preventDefault(); 
              addFormStepData(form); 
              setFormStep(2);
            }}
          >
            Continue
          </button>
          {formStep > 0 && (
            <button
              className="bg-[#EFF0F6] text-[#6F6C90] w-full px-4 py-2 rounded-xl mt-2"
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
            >
              Previous
            </button>
          )}
              </form>
            }
            {
                formStep === 2 &&  <form className='max-w-3xl p-4 mx-auto'>
                <div>
                  <h1 className={s.head}>Contact Information</h1>
                  <p className={s.desc}>How can we reach your business?</p>
                </div>
                <div className='flex gap-3'>
                  <div className='w-full'>
                    <label className='text-[#404D61]' htmlFor='email'>Business Email</label>
                    <input onChange={handleChange} value={form.email} type='email' className={s.inputs} name='email' placeholder='Enter business email' />
                  </div>
                  <div className='w-full'>
                    <label className='text-[#404D61]' htmlFor='phone'>Business Phone</label>
                    <input onChange={handleChange} value={form.phone} className={s.inputs} type='text' name='phone' placeholder='Enter business phone number' />
                  </div>
                </div>
                <div className='text-[#404D61] mt-6'>Location</div>
                <div className='flex gap-3 mt-4 mb-4'>
                  <div className='w-full'>
                    <input onChange={handleChange} value={form.postalCode} type='text' className={s.inputs} name='postalCode' placeholder='Postal Code' />
                  </div>
                  <div className='w-full'>
                    <input onChange={handleChange} value={form.country} className={s.inputs} type='text' name='country' placeholder='Country' />
                  </div>
                </div>
                <button
            className="bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-xl"
            onClick={(e) => {
              e.preventDefault(); 
              addFormStepData(form); 
              setFormStep(3);
            }}
          >
            Continue
          </button>
          {formStep > 0 && (
            <button
              className="bg-[#EFF0F6] text-[#6F6C90] w-full px-4 py-2 rounded-xl mt-2"
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
            >
              Previous
            </button>
          )}
              </form>

            }
           {formStep === 3 && (
        <div className="max-w-2xl w-full mx-auto border border-blue-100 p-4 rounded-md">
          <h2 className="text-2xl font-bold">Verify Information</h2>
          <ul>
            <li className="flex items-center gap-2">Name: <p>{formStepData.name}</p></li>
            <li className="flex items-center gap-2">Surname: <p>{formStepData.surname}</p></li>
            <li className="flex items-center gap-2">Address: <p>{formStepData.address}</p></li>
            <li className="flex items-center gap-2">City: <p>{formStepData.city}</p></li>
            <li className="flex items-center gap-2">Zip: <p>{formStepData.zip}</p></li>
            <li className="flex items-center gap-2">Country: <p>{formStepData.country}</p></li>
            <li className="flex items-center gap-2">State/Province: <p>{formStepData.state}</p></li>
            <li className="flex items-center gap-2">Tel: <p>{formStepData.tel}</p></li>
            <button
      className="bg-[#4A3AFF] text-white w-full px-4 py-2 rounded-md mt-4"
      onClick={() => setShowData(true)} 
    >
      Show Data
    </button>
    {formStep > 0 && (
            <button
              className="bg-[#EFF0F6] text-[#6F6C90] w-full px-4 py-2 rounded-xl mt-2"
              onClick={(e) => {
                e.preventDefault();
                prevStep();
              }}
            >
              Previous
            </button>
          )}
          </ul>
        </div>
      )}
            <div>
            {showData && formStepData && (
      <div className="mt-4 p-4 border border-gray-300 rounded-md">
        <h1>{formStepData.name}</h1>
        <h1>{formStepData.surname}</h1>
        <h1>{formStepData.age}</h1>
        <h1>{formStepData.address}</h1>
        <h1>{formStepData.city}</h1>
        <h1>{formStepData.country}</h1>
        <h1>{formStepData.email}</h1>
        <h1>{formStepData.phone}</h1>

      </div>
    )}
        </div>

        </div >
    )
}

export default StepperForm
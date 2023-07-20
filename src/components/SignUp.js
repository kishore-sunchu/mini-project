import React from 'react'
import { useState } from 'react';


export default function SignUp() {
    const [form, setform] = useState('');
    const handleForm = (e) => {
        // console.log(e.target.value)
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/test', {
            method: 'POST',
            body: JSON.stringify(form),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.text();
        console.log(data);
    }

    return (
        <>
            <div className="container lg:flex lg:justify-center lg:items-center">
                <form className='m-4 w-1/3 p-2' onSubmit={handleSubmit}>
                    <h1 className="text-center">Sign up</h1>
                    <div className="lg:flex lg:justify-center items-center
            flex-col">
                        <input type="text" id='username' name='username' className='border-b-2 outline-none mt-5 w-1/3' placeholder='Username' onChange={handleForm} />
                        <input type="email" id='email' name='email' className='border-b-2 outline-none mt-5 w-1/3' placeholder='Email address' onChange={handleForm} />
                        <input type="password" id='password' name='password' className='border-b-2 outline-none mt-5 w-1/3' placeholder='password' onChange={handleForm} />
                        <div className="flex justify-between items-center mt-5 w-1/3">
                            <button className='bg-[#607D8B] text-[#f2ffff] py-1 px-3 rounded hover:bg-[#8eacbb] hover:text-[#FFFFFF]' type="submit">Submit</button>
                            <button className='text-[#454545] py-1 px-3 rounded hover:bg-[#e0e0e0]' type="reset">Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

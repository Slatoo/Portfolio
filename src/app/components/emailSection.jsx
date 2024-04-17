"use client";
import React, { useState } from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
import { sendButton } from '../lib/mail'

const EmailSection = () => {
    const [mail, setMail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const handleMail = (e) => {
        setMail(e.target.value)
    }
    const handleSubject = (e) => {
        setSubject(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendButton(message, mail, subject)
    };

    return (
        <section id="contact" className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
            <div className='z-10'>
                <h5 className='text-white text-xl font-bold my-2'>Let's Connect.</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md text-justify'
                
                >
                I'm a passionate software developer with experience in web development, specially frontend. If you're looking to collaborate on exciting projects or need assistance with software development, feel free to reach out to me!. 
               <br></br>
                I hope to have the opportunity to work together on future projects!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link
                        href="https://github.com/Slatoo"
                    >
                        <Image src={GithubIcon} alt='Github Icon' />
                    </Link>
                    <Link
                        href="www.linkedin.com/in/josé-a-martinez-10008a28a"
                    >
                        <Image src={LinkedinIcon} alt='Linkedin Icon' />
                    </Link>
                </div>
            </div>
            <div>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block  text-sm font-medium mb-2'>Your Email</label>
                        <input
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type="email"
                            // required
                            placeholder='example@gmail.com'
                            value={mail}
                            onChange={handleMail}
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block  text-sm font-medium mb-2'>Subject</label>
                        <input
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            type="message"
                            //required
                            placeholder='Hi'
                            value={subject}
                            onChange={handleSubject}
                        />
                    </div>
                    <div className='mb-6'>
                        <label
                            htmlFor="message"
                            className='text-white block text-sm mb-2 font-medium'
                        >
                            Message
                        </label>
                        <textarea
                            name='message'
                            id='message'
                            className='bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Lets talk about"
                            value={message}
                            onChange={handleMessage}

                        >
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded w-full'
                    >
                        Send message
                    </button>
                </form>
            </div>

        </section>
    )
}

export default EmailSection
'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const mailtoLink = `mailto:shreykumar961@gmail.com?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
        window.location.href = mailtoLink
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto p-6 bg-white rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.3)] dark:shadow-[0_0_90px_rgba(255,255,255,0.3)] mt-16 mb-16 text-black">
            <h3 className='text-2xl text-underline text-center'>Lets connect! 📧🚀</h3>
            <div className="mt-4">
                <label htmlFor="title" className="">Title</label>
                <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Subject" className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="mt-4">
                <label htmlFor="body" className="">Body</label>
                <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required placeholder="Message" rows={5} className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <button type="submit" className="mt-6 flex group transition px-4 py-2 mt-4 rounded-md hover:bg-black hover:text-white border min-w-5 min-h-5">
                Send Email
            </button>
        </form>
    )
}


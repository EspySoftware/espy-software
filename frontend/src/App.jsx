import SocialCard from './components/SocialCard'
import { useState, useEffect } from 'react'

function App() {
    const [socialLinks, setSocialLinks] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/sociallinks/')
            .then(res => res.json())
            .then(data => setSocialLinks(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className="h-screen flex flex-col items-center gap-6 bg-green-100">
                <h1 className='text-3xl font-bold text-green-900 mt-5'>Espy Software</h1>

                <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                        <SocialCard key={index} name={social.name} url={social.link} image={social.icon} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App

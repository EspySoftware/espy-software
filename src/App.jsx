import SocialCard from './components/SocialCard'

function App() {
    return (
        <>
            <div className="h-screen flex flex-col items-center gap-6 bg-green-100">
                <h1 className='text-3xl font-bold text-green-900 mt-5'>Espy Software</h1>

                <SocialCard name='YouTube' url='https://www.youtube.com/@EspySoftware' image='https://unavatar.io/youtube/EspySoftware' />
                <SocialCard name='Github' url='https://www.github.com/EspySoftware' image='https://unavatar.io/github/EspySoftware' />
            </div>
        </>
    )
}

export default App

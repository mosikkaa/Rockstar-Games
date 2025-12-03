import {useNavigate} from "react-router-dom";

const Sobre = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/')
    }

    return(
        <main className="bg-[#101010] w-full min-h-screen pt-18 pb-18 pl-[6%] pr-[6%] flex flex-col gap-8">
            <h1 className="text-white text-5xl font-extrabold">Welcome to Sobre</h1>
            <button onClick={homePage} className='text-white p-6 bg-yellow-700 rounded-2xl'>Click This To Return Main Page</button>
        </main>
    )
}

export default Sobre
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Sobre = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/')
    }

    return(
        <main className="bg-[#101010] w-full min-h-screen pt-18 pb-18 pl-[6%] pr-[6%] flex flex-col gap-8">
            <motion.h1 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeInOut" }} className="text-white text-5xl font-extrabold">Welcome to Sobre</motion.h1>
            <motion.button initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeInOut" }} onClick={homePage} className='text-white p-6 bg-yellow-700 rounded-2xl'>Click This To Return Main Page</motion.button>
        </main>
    )
}

export default Sobre
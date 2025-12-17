import banner from '../../assets/GTA6Banner.svg'
import banner2 from '../../assets/rockstar.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from "react";
import {motion,AnimatePresence} from "framer-motion";

const Banner = () => {
    const [count, setCount] = useState<number>(1);
    const [check,setCheck] = useState<boolean>(false);

    function handleShow(){
        setCount(prev => (prev === 2 ? 1 : 2));
        setCheck(!check);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => (prev === 2 ? 1 : 2));
        }, 12000);

        return () => clearInterval(interval);
    }, []);


    return (
        <motion.div initial={{ opacity: 0, y: 2 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className='relative w-full aspect-[17/9.4] overflow-hidden'>
            <AnimatePresence mode="wait">
                <motion.img key={count} src={count === 1 ? banner : banner2} alt='banner' initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} className='absolute w-full h-full object-cover'/>
            </AnimatePresence>
            <FontAwesomeIcon icon={faArrowRight} onClick={handleShow} className='cursor-pointer hidden! absolute text-3xl top-[50%] left-10/11'/>
            <FontAwesomeIcon icon={faArrowLeft} onClick={handleShow}  className='absolute hidden! text-3xl top-1/2 cursor-pointer right-10/11'/>
        </motion.div>
    )
}

export default Banner
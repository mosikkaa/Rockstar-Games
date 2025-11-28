import banner from '../../assets/GTA6Banner.svg'
import banner2 from '../../assets/rockstar.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useState,useEffect} from "react";

const Banner = () => {
    const [count, setCount] = useState<number>(1);
    const [check,setCheck] = useState<boolean>(false);

    function handleShow(){
        setCount(prev => (prev === 2 ? 1 : 2));
        setCheck(!check);
    }

    useEffect(() => {
        setInterval(() => {
            setCount(prev => (prev === 2 ? 1 : 2));
        }, 15000);

    }, [check]);


    return (
        <div className='relative'>
            <img src={count==1 ? banner : banner2} alt='banner' className='transition-[5s] w-full'/>
            <FontAwesomeIcon icon={faArrowRight} onClick={handleShow} className='cursor-pointer hidden! absolute text-3xl top-[50%] left-10/11'/>
            <FontAwesomeIcon icon={faArrowLeft} onClick={handleShow}  className='absolute hidden! text-3xl top-1/2 cursor-pointer right-10/11'/>
        </div>
    )
}

export default Banner
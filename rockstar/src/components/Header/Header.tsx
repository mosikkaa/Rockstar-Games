import RLogo from '../../assets/RLogo.svg'
import arrowDown from '../../assets/arrow_drop_down.svg'
import search from '../../assets/searchIcon.svg'
import login from '../../assets/loginIcon.svg'
import {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Header:any = () => {

    const [background,setBackground] = useState<boolean>(false)
    const [click,setClick] = useState<boolean>(false)

    useEffect(():void => {
        const handleScroll = () :void => {
            if (window.scrollY > window.innerHeight ) {
                setBackground(true);
            } else {
                setBackground(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
    }, []);

    function handleClick():void {
        setClick(!click);
    }

    return (
        <header className={`fixed z-50 top-0 ${background ? "bg-black" : "bg-transparent"} w-full pt-5 pb-5 pl-[6%] pr-[6%] bg-black flex items-center justify-between`}>

            <div className='flex items-center justify-between gap-12'>
                <Link to={'/'}><img className='cursor-pointer' src={RLogo} alt='RLogo'></img></Link>
                <ul className='md:flex hidden flex-wrap gap-6'>
                    <li className='cursor-pointer text-white flex'><Link to={"/jogos"}>Jogos </Link><img src={arrowDown} alt='arrowDown'/> </li>
                    <li className='cursor-pointer text-white flex'><Link to={"/loja"}>Loja </Link></li>
                    <li className='cursor-pointer text-white flex'><Link to={"/ajuda"}>Ajuda </Link></li>
                </ul>
            </div>

            <div className='flex relative items-center justify-between gap-6'>
                <Link className='md:flex hidden' to={"/launcher"}><motion.button whileHover={{backgroundColor: "#C88510",scale:1.05}} transition={{ duration: 0.25 }} className='bg-[#FCAF17] pr-5 pl-5 pb-3 pt-3 text-black rounded-xl'>Baixe o Launcher</motion.button></Link>
                <img className='cursor-pointer'  src={search} alt='search'></img>
                <img className='cursor-pointer' src={login} alt='login'></img>
                <FontAwesomeIcon icon={faBars} onClick={handleClick} className='md:hidden! text-white block text-3xl cursor-pointer'/>
                <ul className={`md:hidden mt-65  ${click ? 'flex' : 'hidden'} transition-all 300s right-[0%] absolute flex-col flex-wrap gap-8`}>
                    <li className='cursor-pointer text-white flex'><Link to={"/jogos"}>Jogos </Link><img src={arrowDown} alt='arrowDown'/> </li>
                    <li className='cursor-pointer text-white flex'><Link to={"/loja"}>Loja </Link></li>
                    <li className='cursor-pointer text-white flex'><Link to={"/ajuda"}>Ajuda </Link></li>
                    <button className='bg-[#FCAF17] pr-5 pl-5 pb-3 pt-3 text-black rounded-xl'><Link to={"/launcher"}>Baixe o Launcher</Link></button>
                </ul>
            </div>

        </header>
    )
}

export default Header


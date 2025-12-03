import rockstarLogo from  '../../assets/RockLogo.svg'
import twitch from   '../../assets/twitch.svg'
import instagram from   '../../assets/instagram.svg'
import twitter from   '../../assets/twitter.svg'
import facebook from   '../../assets/facebook.svg'
import youtube from   '../../assets/youtube.svg'
import "./Footer.css"
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='w-full pt-10 pb-10 pl-[6%] pr-[6%] bg-black flex items-center justify-between'>

            <div className='flex-col flex sm:flex-row gap-8'>
                <img className='w-12 h-12 sm:w-auto sm:h-auto' src={rockstarLogo}/>
                <div>
                    <ul className='flex-col sm:flex-row  flex gap-6'>
                        <li className='text-[#B1B1B1] font-medium text-base leading-[150%] cursor-pointer'><Link to={"/contact"}>CONTATO</Link></li>
                        <li className='text-[#B1B1B1] font-medium text-base leading-[150%] cursor-pointer'><Link to={"/sobre"}>SOBRE</Link></li>
                        <li className='text-[#B1B1B1] font-medium text-base leading-[150%] cursor-pointer'><Link to={"/support"}>SUPORTE</Link></li>
                        <li className='text-[#B1B1B1] font-medium text-base leading-[150%] cursor-pointer'><Link to={"/empregos"}>EMPREGOS</Link></li>
                    </ul>
                    <span className='text-[#B1B1B1] font-light text-[13px]'>©2023 Rockstar Games, Inc. - YWR Studio.</span>
                </div>
            </div>

            <ul className='flex flex-col sm:flex-row justify-between gap-4'>
                <li className='cursor-pointer'><img src={twitch}/></li>
                <li className='cursor-pointer'><img src={instagram}/></li>
                <li className='cursor-pointer'><img src={twitter}/></li>
                <li className='cursor-pointer'><img src={youtube}/></li>
                <li className='cursor-pointer'><img src={facebook}/></li>
            </ul>

        </footer>
    )
}

export default Footer
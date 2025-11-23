import RLogo from '../../assets/RLogo.svg'
import arrowDown from '../../assets/arrow_drop_down.svg'
import search from '../../assets/searchIcon.svg'
import login from '../../assets/loginIcon.svg'

const Header:any = () => {
    return (
        <header className='w-full pt-5 pb-5 pl-20 pr-20 bg-black flex items-center justify-between'>

            <div className='flex items-center justify-between gap-12'>
                <img className='cursor-pointer' src={RLogo} alt='RLogo'></img>
                <ul className='flex flex-wrap gap-6'>
                    <li className='cursor-pointer text-white flex'>Jogos <img src={arrowDown} alt='arrowDown'/> </li>
                    <li className='cursor-pointer text-white flex'>Loja</li>
                    <li className='cursor-pointer text-white flex'>Ajuda</li>
                </ul>
            </div>

            <div className='flex items-center justify-between gap-6'>
                <button className='bg-[#FCAF17] pr-5 pl-5 pb-3 pt-3 text-black rounded-xl'>Baixe o Launcher</button>
                <img className='cursor-pointer' src={search} alt='search'></img>
                <img className='cursor-pointer' src={login} alt='login'></img>
            </div>

        </header>
    )
}

export default Header


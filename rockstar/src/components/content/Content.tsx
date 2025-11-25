import GTA5 from '../../assets/GTA5.svg'
import GTAOnline from '../../assets/GTAOnline.svg'
import REDII from '../../assets/REDII.svg'
import REDOnline from '../../assets/REDOnline.svg'
import GTA6Game from '../../assets/GTA6Game.svg'
import GTACAR from '../../assets/GTACAR.svg'
import rockstarTrailer from '../../assets/ROCKSTARTrailer.svg'
import backgroundColor from '../../assets/backgroundColor.svg'
import gamesLauncher from '../../assets/gamesLauncher.svg'
import secondLogo from '../../assets/secondLogo.svg'


const Content = () => {

    function GetGame(props:any){
        return(
            <img className='w-1/5 cursor-pointer' src={props.image} alt={props.value}></img>
        )
    }

    return (
        <main className='bg-[#101010] w-full pt-10 pb-10 pl-[6%] pr-[6%] flex flex-col justify-between gap-16'>

            <section className='w-full flex flex-col items-center justify-between gap-8'>

                <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between items-center w-full'>
                    <h1 className='text-white text-5xl font-extrabold'>Jogos em Destaque</h1>
                    <ul className='flex justify-between gap-6'>
                        <li className='bg-[#606060] rounded-[100px] pt-2 pb-2 pr-4 pl-4 text-white'>PC</li>
                        <li className='bg-[#606060] rounded-[100px] pt-2 pb-2 pr-4 pl-4 text-white'>Console</li>
                        <li className='bg-[#606060] rounded-[100px] pt-2 pb-2 pr-4 pl-4 text-white'>Dispositivos Portáteis</li>
                    </ul>
                </div>

                <div className='w-full flex items-center justify-between'>
                    <GetGame image={GTA5} name='GTA5'/>
                    <GetGame image={GTAOnline} name='GTAOnline'/>
                    <GetGame image={REDII} name='REDII'/>
                    <GetGame image={REDOnline} name='REDOnline'/>
                </div>

                <button className='text-black bg-[#FCAF17] pr-8 pl-8 pt-3 pb-3 rounded-lg'>Ver todos os jogos</button>

            </section>

            <section className='w-full flex flex-col justify-between gap-12'>

                <h1 className='text-5xl font-extrabold text-white'>Últimas Notícias</h1>

                <div className='flex items-center gap-16 justify-between'>

                    <div className='flex flex-col items-start w-2/3'>
                        <img className='rounded-t-2xl rounded-tl-2xl' src={GTA6Game} alt='GTA6Game'/>

                        <div className='pl-10 w-full bg-black rounded-b-2xl rounded-bl-2xl pb-6 pt-6'>
                            <h1 className='text-white font-medium text-[32px] leading-[150%]'>Grand Theft Auto VI - Veja o 1º trailer agora</h1>
                            <span className='text-[#797979] font-light text-[16px] leading-[150%]'>Rockstar Games 5 de dezembro de 2023</span>
                        </div>
                    </div>

                    <div className='flex flex-col gap-16 w-1/3'>

                        <div className='flex flex-col items-start'>
                            <img className='rounded-t-2xl rounded-tl-2xl w-full' src={rockstarTrailer} alt='GTA6Game'/>

                            <div className='pl-6 w-full bg-black rounded-b-2xl rounded-bl-2xl pb-6 pt-6'>
                                <h1 className='text-white font-medium text-[13px] leading-[150%]'>1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.</h1>
                                <span className='text-[#797979] font-light text-[12px] leading-[150%]'>Rockstar Games 5 de dezembro de 2023</span>
                            </div>
                        </div>

                        <div className='flex flex-col items-start'>
                            <img className='rounded-t-2xl rounded-tl-2xl w-full ' src={GTACAR} alt='GTA6Game'/>

                            <div className='pl-6 w-full bg-black rounded-b-2xl rounded-bl-2xl pb-6 pt-6'>
                                <h1 className='text-white font-medium text-[13px] leading-[150%]'>1º Trailer. Terça-feira, 5 de Dezembro. 9h Et.</h1>
                                <span className='text-[#797979] font-light text-[12px] leading-[150%]'>Rockstar Games 5 de dezembro de 2023</span>
                            </div>
                        </div>



                    </div>

                </div>


            </section>

            <section style={{backgroundImage:`url(${backgroundColor})`}} className={`w-full bg-no-repeat bg-cover flex items-center justify-between pt-10 pb-10 pl-[4%] rounded-2xl`}>

                <div className='flex flex-col gap-6 items-start justify-between'>

                    <div className='flex-col lg:items-center lg:flex-row flex items-start gap-6 font-extrabold text-[41.57px] leading-[120%] '>
                        <img src={secondLogo} alt='secondLogo'/>
                        <h1>Games <br/> Launcher</h1>
                    </div>

                    <span className='font-medium text-[32px] leading-[150%]'>Todos os seus jogos <br/> em um só lugar.</span>

                    <button className='rounded-lg bg-[#FCAF17] shadow-[0px 4px 16px 1px #00000052] font-extrabold text-[20px] leading-[150%] pr-18 pl-18 pt-4 pb-4'>Download</button>

                </div>

                    <img className='w-[60%] h-[80%]' src={gamesLauncher} alt='secondLogo'/>

            </section>


        </main>
    )
}

export default Content
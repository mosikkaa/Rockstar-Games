import GTA5 from '../../assets/GTA5.svg'
import GTAOnline from '../../assets/GTAOnline.svg'
import REDII from '../../assets/REDII.svg'
import REDOnline from '../../assets/REDOnline.svg'
import GTA6Game from '../../assets/GTA6Game.svg'
// import GTACAR from '../../assets/GTACAR.svg'
// import rockstarTrailer from '../../assets/ROCKSTARTrailer.svg'
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
        <main className='bg-[#101010] w-full pt-10 pb-10 pl-20 pr-20 flex flex-col justify-between gap-16'>

            <section className='w-full flex flex-col items-center justify-between gap-8'>

                <div className='flex justify-between items-center w-full'>
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

                <div className=''>

                    <div className='w-2/3 flex flex-col'>

                        <div className='overflow-hidden '>
                            <img className='' src={GTA6Game} alt='GTA6Game'/>
                        </div>

                        <div className='pl-10 bg-black rounded-b-2xl rounded-bl-2xl pb-6 pt-6'>
                            <h1 className='text-white font-medium text-[32px] leading-[150%]'>Grand Theft Auto VI - Veja o 1º trailer agora</h1>
                            <span className='text-[#797979] font-light text-[16px] leading-[150%]'>Rockstar Games 5 de dezembro de 2023</span>
                        </div>

                    </div>

                    <div className='w-1/3 flex flex-col gap-6'>

                    </div>

                </div>


            </section>

            <section style={{backgroundImage:`url(${backgroundColor})`}} className={`w-full bg-[${backgroundColor}] bg-no-repeat bg-cover flex items-center justify-between pt-10 pb-10 pl-12 rounded-2xl`}>

                <div className='flex flex-col gap-6 items-start justify-between'>

                    <div className='flex-col lg:items-center lg:flex-row flex items-start gap-6 font-extrabold text-[41.57px] leading-[120%] '>
                        <img src={secondLogo} alt='secondLogo'/>
                        <h1>Games <br/> Launcher</h1>
                    </div>

                    <span className='font-medium text-[32px] leading-[150%]'>Todos os seus jogos <br/> em um só lugar.</span>

                    <button className='rounded-lg bg-[#FCAF17] shadow-[0px 4px 16px 1px #00000052] font-extrabold text-[20px] leading-[150%] pr-18 pl-18 pt-4 pb-4'>Download</button>

                </div>

                <div className='overflow-hidden'>
                    <img className='' src={gamesLauncher} alt='secondLogo'/>
                </div>

            </section>


        </main>
    )
}

export default Content
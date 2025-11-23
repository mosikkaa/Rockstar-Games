import GTA5 from '../../assets/GTA5.svg'
import GTAOnline from '../../assets/GTAOnline.svg'
import REDII from '../../assets/REDII.svg'
import REDOnline from '../../assets/REDOnline.svg'
import GTA6Game from '../../assets/GTA6Game.svg'
// import GTACAR from '../../assets/GTACAR.svg'
// import rockstarTrailer from '../../assets/ROCKSTARTrailer.svg'


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

            <section className='w-full flex flex-col justify-between gap-8'>

                <h1 className='text-5xl font-extrabold text-white'>Últimas Notícias</h1>

                <div className=''>
                    <div className='flex flex-col '>
                        <img className="" src={GTA6Game} />
                        <div>
                            <h1>Grand Theft Auto VI - Veja o 1º trailer agora</h1>
                            <span>Rockstar Games 5 de dezembro de 2023</span>
                        </div>
                    </div>
                </div>

            </section>

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


        </main>
    )
}

export default Content
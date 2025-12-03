import {Link, useNavigate} from "react-router-dom";
import GetGame from "../GetGame/GetGame.tsx";
import GTA5 from "../../assets/GTA5.svg";
import GTAOnline from "../../assets/GTAOnline.svg";
import REDII from "../../assets/REDII.svg";
import REDOnline from "../../assets/REDOnline.svg";

const Jogos = () => {
    const navigate = useNavigate();

    const homePage = () => {
        navigate('/')
    }

    return (
        <main className="bg-[#101010] w-full min-h-screen pt-18 pb-18 pl-[6%] pr-[6%] flex flex-col gap-8">
            <h1 className="text-white text-5xl font-extrabold">Welcome to Jogos:</h1>
            <div className='w-full flex items-center justify-between'>
                <Link to={"/jogos/1"} className='block w-1/5'><GetGame src={GTA5} value='GTA5'/></Link>
                <Link to={"/jogos/2"} className='block w-1/5'><GetGame src={GTAOnline} value='GTAOnline'/></Link>
                <Link to={"/jogos/3"} className='block w-1/5'><GetGame src={REDII} value='REDII'/></Link>
                <Link to={"/jogos/4"} className='block w-1/5'><GetGame src={REDOnline} value='REDOnline'/></Link>
            </div>
            <button onClick={homePage} className='text-white p-6 bg-yellow-700 rounded-2xl'>Click This To Return Main Page</button>
        </main>
    )
}
export default Jogos
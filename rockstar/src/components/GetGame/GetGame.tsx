import {motion} from 'framer-motion';


type GameProps = {
    src: string,
    value:string
}

const GetGame = (props: GameProps)=> {
    return (
        <motion.img initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3, ease: "easeInOut" }} className='w-full cursor-pointer' src={props.src} alt={props.value}></motion.img>
    )
}

export default GetGame;
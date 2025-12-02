
type GameProps = {
    src: string,
    value:string
}

const GetGame = (props: GameProps)=> {
    return (
        <img className='transition-transform duration-300 hover:scale-105 w-1/5 cursor-pointer' src={props.src} alt={props.value}></img>
    )
}

export default GetGame;
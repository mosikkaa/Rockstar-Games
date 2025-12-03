
type GameProps = {
    src: string,
    value:string
}

const GetGame = (props: GameProps)=> {
    return (
        <img className='transition-transform duration-300 hover:scale-105 w-full cursor-pointer' src={props.src} alt={props.value}></img>
    )
}

export default GetGame;
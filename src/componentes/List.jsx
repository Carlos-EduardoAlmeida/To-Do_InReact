import logoreact from '../assets/logoreact.png'


export default function ListComponent({text}){
    return(
        <div id="ListComponent">
            
            <input id='button' type="checkbox" value="" />
            <h1> {text}</h1>
            <img src={logoreact} alt="React Logo" />
            
        </div>
    )
    
}
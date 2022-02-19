import './inputQR.css';


const InputQR =({setTable})=> {

    return (
    
        <form>
            <label>
                Nombre de tables :
                <input className="inputQR" type="text"  onChange={(e)=> setTable(e.target.value)}/>
            </label>
        </form>
    
    )
    }
    
    
    
    export default InputQR;
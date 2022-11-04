import React,{useState} from "react";

function ItemCount ({ initial, stock, onAdd }) {
    const [count, setCount] = useState(initial);

    const sumar = () =>{
        setCount(count +1);
    }

    const resta = () =>{
        setCount(count -1)
    }


    return (
        <div>
            <button className="btn btn-outline-success" onClick={sumar} disabled={count >= stock}> + </button>
            <div style={{color:"black", widht:"20vw"}}> {count} </div>
            <button className="btn btn-outline-danger" onClick={resta} disabled={count <= 1} > - </button>
            <div>
                <button className="btn btn-primary" onClick={()=> onAdd(count)} disabled={stock = 0} >Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;

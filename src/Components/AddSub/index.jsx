import "./estilo.css";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

export function AddSub({producto,maxCant}){
    let [getCant, setCant] = useState(1)
    let {Add} = useContext(CartContext)
    // console.log(add);


    function add(){
        setCant(getCant >= maxCant? maxCant: getCant +1)
    }
    function sub(){
        setCant(getCant <= 1 ? 1:getCant -1)
    }

    return(
        <div className="AddSub">
            <button className="Button" onClick={() => add()}>+</button>
            <span className="Cantidad">{getCant}</span>
            <button className="Button" onClick={() => sub()}>-</button><br></br>
            <button onClick={() => Add(Number(getCant),producto)}>Agregar a carrito</button>
        </div>
    )
}
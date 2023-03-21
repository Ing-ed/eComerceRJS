import { createContext, useState } from "react";

export let CartContext = createContext();

export function CartProvider({children}){
    let [getCant,setCant] = useState(0);
    let [getProd,setProd] = useState([]);
    let prod = [];

    function onAdd(cantidad,producto){
        producto.cant = cantidad;
        setCant(getCant + cantidad);
        setProd([...getProd,producto]);

    }
    
    function Borrar(index){
        prod = getProd;
        setCant(getCant - 1);
        if(+prod[index].cant > 1){
            +prod[index].cant--;
        } else {
            prod.splice(index,1);
        }
        setProd(prod);
        console.log(prod)
    }

    return(
        <CartContext.Provider value = {{cant:getCant,add:onAdd,list:getProd, Borrar :Borrar}}>
            {children}
        </CartContext.Provider>
    )
}

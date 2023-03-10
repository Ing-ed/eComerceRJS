import Carrito from '../../assets/Carrito.png'
export function CartWidget({cant}){
    let estilo = {
        boton:{
            border:'none'
        },
        img:{
            width:'50px',
            borderRadius:'10px',
            border:'none',
            backgroundColor:'#FAFAFA'
        },
        contenedor:{
            display:'flex',
            gap:'10px',
            color:'#FAFAFA'
        }
    }
    return(
        <div style={estilo.contenedor}>
            <button className='carrito' style={estilo.boton}><img style={estilo.img} src={Carrito}></img></button>
            <p>{cant}</p>
        </div>
    )
}
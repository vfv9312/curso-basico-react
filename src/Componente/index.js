import { React, useState } from "react";

export default function Form(props) {
    const historieta = props
    const [contador, setContador] = useState(0); //CREACION DE UN ESTADO
    return (
        <form><h3>{historieta.Titulo}</h3>
        <button type="button" onClick={()=>{setContador(contador +1)}} disabled={contador === historieta.excistencia}>+</button>{/* le colocamos type = button para que no se actualize la pagina completa debido a que form le da otro type que provoca eso*/}
        {contador}
        <button type="button" onClick={()=> {setContador(contador -1)}} disabled ={contador === 0 ? true : false }>-</button>{/*setContador enviara el valor que tenga a contador asi mismo disable desactivara el boton si es identico a 0*/}
        </form>
    );
    
}
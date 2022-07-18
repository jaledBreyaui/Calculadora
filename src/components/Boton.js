import { useContext } from "react";
import { Context } from "../Context";


export default function Boton({ prop }) {
    const { handleClick, operacion, handleResult, operador } = useContext(Context)

    const esSigno = (prop) => {
        if (isNaN(prop)) {
            return false
        }
        else {
            return true
        }
    }

    return (
        (prop === "=") ? <div onClick={() => handleResult(operador)} className={esSigno(prop) ? "numero" : "operador"}>
            <p>{prop}</p>
        </div> :
            <div onClick={esSigno(prop) ? () => handleClick(prop) : () => operacion(prop)} className={esSigno(prop) ? "numero" : "operador"}>
                <p>{prop}</p>
            </div>
    )

}
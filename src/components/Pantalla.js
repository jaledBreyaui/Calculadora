import { useContext } from "react";
import { Context } from "../Context";

export default function Pantalla() {


    const { display, operador, primerTermino, resultado } = useContext(Context)
    return (
        <div className="pantalla">
            {(resultado) ? <h1 className="display">{resultado} </h1> :
                (!operador) ? <h1 className="display">{display} </h1> :
                    <div className="operacion">
                        <h1>{primerTermino}</h1>
                        <p>{operador}</p>
                        <h1 className="display">{display}</h1>
                    </div>
            }
        </div>

    )
}
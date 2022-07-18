import { createContext, useState } from "react";
const Context = createContext({});
const { Provider } = Context;


const ContextProvider = ({ children }) => {
    const [display, setDisplay] = useState([]);
    const [operador, setOperador] = useState();
    const [primerTermino, setPrimerTermino] = useState();
    const [resultado, setResultado] = useState();




    const handleClick = (param) => {
        if ([display][0].includes(".") && param === ".") {
        } else {
            setDisplay(display + param);
            setResultado("");
        }
    }

    const clear = () => {
        setDisplay("")
        setOperador("")
        setResultado("")
    }

    const operacion = (paramOp) => {
        if (paramOp !== operador)
            if (paramOp === ".") {
                handleClick(paramOp)
            } else {
                setOperador(paramOp)
                setPrimerTermino(display)
                setDisplay("")

                if (resultado) {
                    setPrimerTermino(resultado)
                    setResultado("")
                }
            }

    }

    const handleResult = (operador) => {
        if (operador === "+") {
            setResultado(Number(primerTermino) + Number(display))
        }
        if (operador === "-") {
            setResultado(Number(primerTermino) - Number(display))
        }
        if (operador === "x") {
            setResultado(Number(primerTermino) * Number(display))
        }
        if (operador === "/") {
            setResultado(Number(primerTermino) / Number(display))
        }

        setOperador("")
        setDisplay("")
        setPrimerTermino("")
    }




    return (
        <Provider value={{
            handleClick,
            clear,
            display,
            operacion,
            operador,
            primerTermino,
            handleResult,
            resultado,
        }}>
            {children}
        </Provider>
    )
}

export { Context, ContextProvider }
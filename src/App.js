import Boton from "./components/Boton";
import Clear from "./components/Clear";
import Pantalla from "./components/Pantalla";
import { ContextProvider } from "./Context"



function App() {



  return (
    <ContextProvider>

      <div className="calculadoraContainer">
        <Pantalla />
        <div className="contenedorFila">
          <div className="fila">
            <Boton prop={"1"} />
            <Boton prop={"2"} />
            <Boton prop={"3"} />
            <Boton prop={"+"} />
          </div>
          <div className="fila">
            <Boton prop={"4"} />
            <Boton prop={"5"} />
            <Boton prop={"6"} />
            <Boton prop={"-"} />
          </div>
          <div className="fila">
            <Boton prop={"7"} />
            <Boton prop={"8"} />
            <Boton prop={"9"} />
            <Boton prop={"x"} />
          </div>
          <div className="fila">
            <Boton prop={"="} />
            <Boton prop={"0"} />
            <Boton prop={"."} />
            <Boton prop={"/"} />
          </div>
        </div>
        <Clear />
      </div>
    </ContextProvider>
  );
}

export default App;

import { useContext } from "react";
import { Context } from "../Context";

export default function Clear() {
    const { clear } = useContext(Context)
    return (
        <div className="clear">
            <button onClick={() => clear()}
            >AC</button>
        </div>
    )

}
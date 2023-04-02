import { useReducer } from "react";

import reduceFunctiontoupdate from "./CounterReducer";

import { dicAction, incAction, resetAction } from "./CounterAction";




function Counter2(){
    const [state, dispatch] =useReducer(reduceFunctiontoupdate, 0);
    const handelinc=()=>{
        dispatch(incAction(1));
    };
    const handeldic=()=>{
        dispatch(dicAction(1));
    };
    const handelreset=()=>{
        dispatch(resetAction(1));
    };
    return (
        <>
        <h1>COUNT{state}</h1>
        <button onClick={handelinc}>Add</button>
        <button onClick={handeldic}>sub</button>
        <button onClick={handelreset}>Reset</button>
        </>

    );
}
export default Counter2;
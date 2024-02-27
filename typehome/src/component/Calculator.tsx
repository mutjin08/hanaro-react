import { CalculatorAction, CalculatorStateType } from "./type/commonType";
import { CalculatorReducer } from "./reducer/calculatorReducer";
import { useState, useReducer } from "react";

function Calculator() {
    const initialState: CalculatorStateType = { x: 0, y: 0, result: 0, operator: "" };
    const [state, dispatch] = useReducer(CalculatorReducer, initialState); // Add initialState as the second argument
    
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0)
    
    const xChange = (e:any) => setX(parseInt(e.target.value));
    const yChange = (e:any) => setY(parseInt(e.target.value));

    //const xChange = (e: React.ChangeEvent<HTMLInputElement>) => setX(parseInt(e.target.value, 10));
    //const yChange = (e: React.ChangeEvent<HTMLInputElement>) => setY(parseInt(e.target.value, 10));

    const Add = () => {dispatch({type:"ADD", x:x, y:y})}
    const Sub = () => {dispatch({type:"SUB", x:x, y:y})}
    const Mul = () => {dispatch({type:"MUL", x:x, y:y})}
    const Div = () => {dispatch({type:"DIV", x:x, y:y})}

    return (
        <div>
            x : <input type="text" onChange={xChange} value={x} /><br />
            y : <input type="text" onChange={yChange} value={y} /><br />
            <button type="button" onClick={Add}>+</button>&nbsp;
            <button type="button" onClick={Sub}>-</button>&nbsp;
            <button type="button" onClick={Mul}>*</button>&nbsp;
            <button type="button" onClick={Div}>/</button>&nbsp;
            <h1>결과 : {state.x} {state.operator} {state.y} = {state.result}</h1>
        </div>
    );
}

export default Calculator;

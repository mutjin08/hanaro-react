/* 
//reducer
//현재상태와 액션(함수) 객체를 받아와서 새로운 상태를 반환한다
//사용목적 : 상태와 함수를 분리해서 처리하기 위해 주로 redux lib가 이렇게 구축되어 있다
//component간에 깊이가 계속되면 부모componet는 자식 component에게 계속해서 대대손손 props를 전달해야 하고
//자식 component는 부모 component의 함수를 호출하면서 부모에게 도달해야 한다
//component 구조가 아주 복잡할 경우에는 이 방법으로 의사전달을 하기 어렵다
//그래서 모두가 사용하는 공통공간에 함수를 두고 이 함수를 직접 호출하게 한다

//현재 상태에 action을 가하여 새로운 상태값을 반환하는 함수
function Temp(currentState, action){
    return newState
}
*/

import { useReducer, useState } from "react";

//interface는 JSON처럼 사용하면 된다
interface MyState{
    count:number;
}

//Reducer에 전달할 action : 함수인데, type을 미리 지정해야 한다
//매개변수로 type, value를 전달한다
type CounterAction = {type:"increase"} | {type:"decrease"} | {type:"reset"} | {type:"add", count:5}

const initialState : MyState = {count:0}

//reducer한테 전달할 함수
//매개변수는 앞에 이전 state, 뒤에 함수, 반환값이 새로운 state여야 한다
//typescript에서 함수를 선언할 때 매개변수도 타입이 있어야 하지만
//반환값도 타입을 지정해주어야 한다
function StateReducer(state:MyState, action:CounterAction):MyState{
    switch(action.type){
        case "increase":
            //새로운 상태 반환 - db로 데이터를 읽어 온다
            //json의 전개, 앞의 state에 현재 상태 추가하기
            return {...state, count:state.count+1};
        case "decrease":
            return {...state, count:state.count-1};
        case "reset":
            return {...state, count:0};
        case "add":
            return {...state, count : state.count+action.count};
        default:
            //throw가 return을 대신할 수 있다
            throw new Error("Unknown action");
    }
    return {count:0}
}

function Counter2() {
    //const [number, setNumber] = useState<MyState>({count:0});


    const [status, dispatch] = useReducer(StateReducer, initialState); 
    //status=상태정보, dispatch=함수
    //StatusReducer를 dispatch를 통해서 호출해라는 의미임

    const increase = () => {
        dispatch({type:"increase"})
    }
    const decrease = () => {
        dispatch({type:"decrease"})
    }
    const reset = () => {
        dispatch({type:"reset"})
    }
    const add = () => {
        dispatch({type:"add", count:5})
    }
    return (
        <div>
            <h1>현재 카운트 : {status.count}</h1>
            <button type="button" onClick={increase}>++</button>
            <button type="button" onClick={decrease}>--</button>
            <button type="button" onClick={reset}>0</button>
            <button type="button" onClick={add}>+5</button>
        </div>
    );
}

export default Counter2;
import { CalculatorAction, CalculatorStateType} from "../type/commonType";

//reducer로 사용할 함수의 매개변수 state, action이 된다
//var쓰면 같은 함수내에서는 서로 다른 블록이더라도 같은 변수로 생각한다
function CalculatorReducer(state:CalculatorStateType, action:CalculatorAction):CalculatorStateType{
    switch(action.type){
        case "ADD": 
            let addResult = parseInt(action.x) - parseInt(action.y)
            return {...state, "result":addResult.toString(), "operator":"+", x:action.x, y:action.y}
        case "SUB": 
            let subResult = parseInt(action.x) - parseInt(action.y)
            return {...state, "result":subResult.toString(), "operator":"-", x:action.x, y:action.y}
        case "MUL": 
            let mulResult = parseInt(action.x) * parseInt(action.y)
            return {...state, "result":mulResult.toString(), "operator":"*", x:action.x, y:action.y}
        case "DIV": 
            let divResult = parseInt(action.x) / parseInt(action.y)
            return {...state, "result":divResult.toString(), "operator":"/", x:action.x, y:action.y}
        default:
            throw new Error("지원하지 않는 액션입니다");
    }
}

export {CalculatorReducer};
//export 시켜야 다른 파일에서 사용이 가능하다
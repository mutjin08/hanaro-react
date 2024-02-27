//공통타입을 만들자 
export interface MyState{
    count:number; 
}

//Reducer에 전달할 Action : 함수인데 타입을 미리 지정해야 한다
//type만 지정, 함수타입 2개 더 추가하기 
export type CounterAction = {type:"increase"}|{type:"decrease"}|{type:"reset"}|{type:"add", count:5}

//함수의 경우는  export {함수명1, 함수명2 }; ......
//타입의 경우는 type앞에 직접 기술해야 한다 

export type CalculatorStateType = {
    x:string;
    y:string;
    result:string;
    operator:string;
}

export type CalculatorAction = {type:"ADD", x:string, y:string}|{type:"SUB", x:string, y:string}|{type:"DIV", x:string, y:string}|{type:"MUL", x:string, y:string}|{type:"RESET", x:string, y:string, result:string, operator:""}

//tic-tac-toe
//클릭하면 O또는 X가 그려지는 말을 놓아야 할 위치를 컴포넌트로 만들자

//ffc
//button 컴포넌트 customizing -> react component로 만든다
//부모에게 내가 클릭되었음을 알린다

//const {value, onSquareClick} = props //JSON
//자식은 O가 출력될지, X가 출력될지 모름
//부모 컴포넌트로부터 value, onSquareClick를 전달받는다

//데이터는 위-> 아래
//이벤트는 아래-> 위 : 자식은 부모의 함수를 호출해서 이벤트를 통해 부모에게 알릴수 있음

function Square({value, onSquareClick}) {
    return(
        <div>
            <button type="button" className="square" onClick={onSquareClick}>{value}</button>
        </div>
    );
}

export default Square;
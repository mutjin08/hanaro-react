import { useState } from "react";
import Square from "./square";
function GameBoard() {
    //배열을 메모리 크기 주고 만든다. Array(크기).fill(0) 만들고 특정값으로 초기화
    const [squares, setSquares] = useState([Array(9).fill(null)]);
    const [xIsNext, setXIsNext] = useState(true);
    const tempFunc=(index)=>{
        setXIsNext( !xIsNext ); //true <=> false가 바뀐다.
        xIsNext?squares[index] = 'X': squares[index]='O';
        setSquares( [...squares] ); //배열 깊은 복사

        let winner = whoWins(squares);
        if (winner != null){
            alert(winner + "is winner");
            return;
        }
    }

    //누가 이겼는지 확인하기
    const isWinner = () => {

    }
        
    return (
        <div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={()=>tempFunc(0)}/>
                <Square value={squares[1]} onSquareClick={()=>tempFunc(1)}/>
                <Square value={squares[2]} onSquareClick={()=>tempFunc(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={()=>tempFunc(3)}/>
                <Square value={squares[4]} onSquareClick={()=>tempFunc(4)}/>
                <Square value={squares[5]} onSquareClick={()=>tempFunc(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={()=>tempFunc(6)}/>
                <Square value={squares[7]} onSquareClick={()=>tempFunc(7)}/>
                <Square value={squares[8]} onSquareClick={()=>tempFunc(8)}/>
            </div>
        </div>
     )
}

function whoWins(squares){
    const lines = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]];

    for(let i=0;i<lines.length;i++){
        const [a, b, c] = lines[i]; //배열의 해체
        if(squares[a]!=null && squares[a]==squares[b] && squares[b]==squares[c]){
            return squares[a]; //승리한 기호
        }
    }
    return null; //이거 작성하지 않으면 undefined
}
export default GameBoard;
//import logo from './logo.svg';
import './css/style.css';
import MyComponent from './component/mycomponent1';
import Counter from './component/counter';
//import Square from './component/game/square';
import GameBoard from './component/game/board';

function App() {
  return(
    <div>
        <h1>React First Project</h1>
        <MyComponent/>
        <Counter/>
        {/*<Square value="5" onSquareClick={()=>{alert("pressed!!!")}}/>*/}
        <GameBoard/>
    </div>
  );
}

export default App;

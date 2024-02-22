//import logo from './logo.svg';
import './App.css';

function App() {
  const userName = "Tom";
  const naver = {
    name : "네이버",
    url : "https://naver.com"
  };
  return (
    <div className = "App">
      <h1 style={{color:"white", backgroundColor:"green"}}>App.js</h1>
      <p>Hello, {userName}!!!</p>
      <p>
        <a href={naver.url}>{naver.name}</a>
      </p>
    </div>
  );
}

export default App;

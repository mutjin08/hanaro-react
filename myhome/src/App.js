import logo from './logo.svg';
import './App.css';
//. 로 시작하는 경우는 사용자가만든 폴더나 파일
//node_modules 폴더에 있는 것들은 이렇게 접근
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/layout';
import Home from './component/home';
import { Route, Routes } from 'react-router-dom';
import HeroList from './component/hero/heroList';
function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<HeroList/>} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
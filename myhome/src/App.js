//import logo from './logo.svg';
import './App.css';
//. 로 시작하는 경우는 사용자가 만든 폴더나 파일
//node_modules 폴더에 있는 것들은 이렇게 접근한다
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/layout';
import Home from './component/home';
import { Route, Routes } from 'react-router-dom';
import HeroList from './component/hero/heroList';
import HeroView from './component/hero/heroView';
import NoMatch from './component/nomatch';
import Add from './component/add';
import GetUserInfo from './component/getUserInfo';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/hero/list" element={<HeroList/>} />
          <Route path="/hero/view/:id" element={<HeroView/>}/>
          <Route path="/add/:a/:b" element={<Add/>}/>
          <Route path="/getUserInfo" element={<GetUserInfo/>}/>
          <Route path="*" element={<NoMatch/>}/>
        </Route>
      </Routes>
    </div>
  );
}
export default App;
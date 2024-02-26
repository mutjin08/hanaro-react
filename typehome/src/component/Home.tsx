//ffc
import {Outlet} from 'react-router-dom';
function Home() {
    return (
        <div>
            <h1>메뉴를 추가해도 되고, 안해도 되고~</h1>
            {/*Outlet은 필수이다!!!*/}
            <Outlet />
        </div>
    );
}

export default Home;
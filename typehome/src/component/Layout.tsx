//ffc
import {Outlet} from 'react-router-dom';
function Layout() {
    return (
        <div>
            <h1>Layout.tsx : 메뉴를 추가해도 되고, 안해도 되고~</h1>
            {/*Outlet은 필수이다!!!*/}
            <Outlet />
        </div>
    );
}

export default Layout;